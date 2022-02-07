import React, { ComponentClass, FunctionComponent, useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  closestCenter
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDroppable } from "@dnd-kit/core";
import { Episode } from "./row";

import 'react-virtualized/styles.css';

// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

export interface IRenderComponent {
  id: string;
  data: any;
  row?: string;
  children?: React.ReactNode;
  dragging?: boolean | undefined;
  last?: boolean;
  // changeTier?: (tier: string) => void;
}

type RenderComponentType = FunctionComponent<IRenderComponent> | ComponentClass<IRenderComponent>;

export interface GridProps {
  groups: Record<string, any[]>;
  listOrder: string[];
  disabled?: boolean;
  RenderComponent: RenderComponentType;
  orderChange?: (groups: Record<string, any[]>) => void;
  locked?: boolean;
}

export function Grid(props: GridProps) {
  const [items, setItems] = useState(props.groups);
  const [activeId, setActiveId, ] = useState<Episode | null>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [visibleTiers, setVisibleTiers] = useState([]);
  const ItemMap: Record<string, { row: string, item: any }> = {};

  let itemCount = 0;

  let lastCalculatedRows = [];

  const navigateToTier = (tier: string) => {
    const tierInfo = lastCalculatedRows.find(row => row.tier === tier);
    setCurrentIndex(tierInfo.startRow - 1)
  } 


  Object.keys(items).forEach(key => {
    items[key].forEach(item => {
      ItemMap[item.id] = {
        row: key,
        item: item
      }
      itemCount += 1
    })
  })

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  console.log(visibleTiers)

  return (
    <div className="tier-list-wrapper">
      <div className="tier-navigation">
        {props.listOrder.map( (tier, index) => (
          <div key={tier} className="tier-nav-tab">
            <span className={`tier-nav-letter ${visibleTiers.some(visibleTier => visibleTier.tier === tier) ? 'in-view' : ''}`} onClick={() => navigateToTier(tier)}>{tier}</span>
            { index < (props.listOrder.length -1 ) && <span className="tier-nav-spacer">/</span>}
          </div>))}
      </div>
      <div className="tier-list">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}

      >
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / 230);

            let rowCount = 0;
            let rowMapper: any[] = [];

            props.listOrder.forEach(key => {
              let count = 2;
              if (key in items && items[key].length > 0) {
                count = Math.ceil(items[key].length / itemsPerRow) + 1;
              }

              rowMapper.push({
                tier: key,
                startRow: rowCount + 1,
                endRow: rowCount + 1 + count
              });
              rowCount += count;
            })

            rowMapper.reverse();

            lastCalculatedRows = rowMapper;
            return (
              <List
                className='List'
                width={width}
                height={height}
                rowCount={rowCount}
                scrollToIndex={currentIndex}
                scrollToAlignment={'start'}
                onRowsRendered={(data) => {
                  setVisibleTiers(lastCalculatedRows.filter(tier => (tier.startRow > data.startIndex &&  tier.startRow <= data.stopIndex) ||
                                                                    (tier.endRow >= data.stopIndex && tier.startRow <= data.startIndex)));
                }}
                rowHeight={({ index }) => {
                  const tierDisplay = rowMapper.find(tier => (tier.startRow - 1) === index);
                  return tierDisplay ? 105 : 230;
                }}
                rowRenderer={
                  ({ index, key, style }) => {

                    //short circuit to show tier
                    const tierDisplay = rowMapper.find(tier => (tier.startRow - 1) === index);

                    if (tierDisplay) {
                      const itemCount = tierDisplay.tier in items ? items[tierDisplay.tier].length : 0;
                      return (
                        <div key={tierDisplay.tier}
                          style={style}>
                          <div className='tier'>
                            <div className='tier-name'>
                              <div className='letter'>
                                {tierDisplay.tier}
                              </div>
                            </div>
                            <div>
                              <h2 className='tier-title'>
                                Tier ({itemCount})
                              </h2>

                            </div>
                          </div>
                        </div>
                      )
                    }

                    const tier = rowMapper.find(tier => tier.startRow <= index);
                    const fromIndex = (index - tier.startRow) * itemsPerRow

                    const container = items[tier.tier];
                    const toIndex = Math.min(fromIndex + itemsPerRow, container.length);

                    const lessItemsThenMax = (toIndex - fromIndex) < itemsPerRow;

                    const items2: JSX.Element[] = [];

                    for (let i = fromIndex; i < toIndex; i++) {
                      const item = container[i];
                      items2.push(
                        <SortableItem key={item.id} id={item.id} ComponentRef={props.RenderComponent} data={item} row={tier.tier} selected={item.id === activeId?.id}
                          changeTier={(newTier) => moveTier(newTier, item.id, i, tier.tier)} disabled={false} last={(i + 1) === toIndex && !lessItemsThenMax} />)
                    }

                    return (
                      <div key={key} style={style} >
                        <Container id={tier.tier} items={container} >
                          {items2}
                        </Container>
                      </div>
                    )
                  }
                }
              />
            )
          }}
        </AutoSizer>
        <DragOverlay>{activeId ? <props.RenderComponent id={activeId.id} data={activeId} dragging={true}></props.RenderComponent> : null}</DragOverlay>
      </DndContext>
      </div>
    </div>

  );

  function moveTier(tier: string, id: string, index: number, containerId: string) {
    setItems((prev) => {
      const nextTier = findContainer(tier);

      return {
        ...prev,
        [containerId]: [
          ...prev[containerId].filter((item) => item.id !== id)
        ],
        [nextTier]: [
          items[containerId][index],
          ...prev[nextTier]
        ]
      };
    });

    if (props.orderChange) {
      props.orderChange(items);
    }
  }

  function findContainer(id: string) {
    if (id in items) {
      return id;
    }
    return ItemMap[id].row;
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;

    setActiveId(ItemMap[id].item);
  }

  function handleDragOver(event: any) {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(ep => ep.id === id);
      const overIndex = overItems.findIndex(ep => ep.id === overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over && draggingRect &&
          overIndex === overItems.length - 1 &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item.id !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      };
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].findIndex(ep => ep.id === id);
    const overIndex = items[overContainer].findIndex(ep => ep.id === overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }

    setActiveId(null);

    if (props.orderChange) {
      props.orderChange(items);
    }
  }
}

export interface ContainerProps {
  id: string;
  items: any[];
  children?: React.ReactNode;
}


export function Container(props: ContainerProps) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <div className="row-container">
        <div className='episode-container' ref={setNodeRef} >
          {props.children}
        </div>
      </div>
    </SortableContext>
  );
}


export interface SortableItemProps {
  id: string;
  data: any;
  row: string;
  ComponentRef: RenderComponentType;
  changeTier: (tier: string) => void;
  disabled?: boolean;
  last?: boolean;
  selected?: boolean;
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id, disabled: props.disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let insertedContent;

  if (!props.disabled) {
    insertedContent = (<div className='quick-tier-container'> {['s', 'a', 'b', 'c', 'd', 'f', 'u'].filter(tier => tier !== props.row).map(tier =>
      <button className='quick-tier' key={tier} onClick={() => props.changeTier(tier)}>
        {tier}
      </button>
    )} </div>)
  }

  if (props.selected) {
    return (<div ref={setNodeRef} style={{ border: '2px solid gray', width: 220, ...style }} {...attributes} {...listeners} className="row-item">

    </div>)
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="row-item">
      <props.ComponentRef id={props.id} data={props.data} row={props.row} last={props.last}>
        {insertedContent}
      </props.ComponentRef>
    </div>
  );
}
