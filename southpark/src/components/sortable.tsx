import React, {ComponentClass, FunctionComponent, useState } from "react";
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
import { arrayMove, horizontalListSortingStrategy, rectSwappingStrategy, sortableKeyboardCoordinates, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDroppable } from "@dnd-kit/core";
import { Episode } from "./row";

export interface IRenderComponent {
  id: string;
  data: any;
  row?: string;
  changeTier?: (tier: string) => void;
}

type RenderComponentType = FunctionComponent<IRenderComponent> | ComponentClass<IRenderComponent>;

export interface GridProps {
  groups: Record<string, any[]>;
  listOrder: string[];
  disabled?: boolean;
  RenderComponent: RenderComponentType;

}

export function Grid(props: GridProps) {
  const [items, setItems] = useState(props.groups);
  const [activeId, setActiveId] = useState<Episode | null>(null);

  const ItemMap: Record<string, { row: string, item: any }> = {};

  Object.keys(items).forEach(key => {
    items[key].forEach(item => {
      ItemMap[item.id] = {
        row: key,
        item: item
      }
    })
  })

  const sensors = useSensors(
    useSensor(PointerSensor, {activationConstraint: {distance: 10}}),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );


  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div>
          {props.listOrder.map((id: string) => (
            <MemoContainer id={id} items={items[id]} key={id} ComponentRef={props.RenderComponent} 
            changeTier={(tier, itemId, index) => moveTier(tier, itemId, index, id)}/>
          ))}
        </div>

        <DragOverlay>{activeId ? <props.RenderComponent id={activeId.id} data={activeId}></props.RenderComponent> : null}</DragOverlay>
      </DndContext>
    </div>
  );

  function moveTier(tier: string, id: string, index: number, itemsContainer) {
    setItems((prev) => {
      const nextTier = findContainer(tier);

      return {
        ...prev,
        [itemsContainer]: [
          ...prev[itemsContainer].filter((item) => item.id !== id)
        ],
        [nextTier]: [
          items[itemsContainer][index],
          ...prev[nextTier]
        ]
      };
    });
  }

  function findContainer(id: string) {
    if(id in items) {
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
  }
}

export interface ContainerProps {
  id: string;
  items: any[];
  ComponentRef: RenderComponentType;
  changeTier: (tier: string, id: string, index: number) => void;
}

export function Container(props: ContainerProps) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  // console.log("rerender")
  return (
    <div className='tier'>
      <div className='tier-name'>
        <div className='letter'>
          {id}
        </div>
      </div>
      <div>
        <h2 className='tier-title'>
          Tier ({items.length})
        </h2>
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>

          <div className='episode-container' ref={setNodeRef} >
            {items.map((item: Episode, index) => (
              <SortableItem key={item.id} id={item.id} ComponentRef={props.ComponentRef} data={item} row={props.id}
                changeTier={(tier) => props.changeTier(tier, item.id, index)}/>
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}

const MemoContainer = React.memo(Container);

export interface SortableItemProps {
  id: string;
  data: any;
  row: string;
  ComponentRef: RenderComponentType;
  changeTier: (tier: string) => void;
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    // transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <props.ComponentRef id={props.id} data={props.data} row={props.row} changeTier={props.changeTier}></props.ComponentRef>
    </div>
  );
}
