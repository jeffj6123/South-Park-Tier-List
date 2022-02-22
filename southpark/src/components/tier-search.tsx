import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import RelativeTime from '@yaireo/relative-time'
import { httpServiceContext } from "../services/http.service";
import Pager from "./pager";
import { paginationLimit } from "../constants";
import Toggle, { MultiOptionToggle, MultiOptionToggleValue } from "./toggle";

const relativeTime = new RelativeTime();

type SortDirection = "up" | "down";

export interface SortHeaderState {
    direction: SortDirection;
    activeHeader: string;
    type?: string;
    index: number;
}

export interface SortHeaderProps {
    id: string;
    displayText: React.ReactNode;
    direction?: SortDirection;
    disabled?: boolean;
    toggled: ({ direction: SortDirection, id: string }) => void;
}

export function SortHeader(props: SortHeaderProps) {
    return (<div className="table-header" onClick={() => !props.disabled && props.toggled({ id: props.id, direction: (props.direction === 'up' ? 'down' : 'up') })}>
        {props.displayText}
        {props.direction && <i className={`arrow ${props.direction} ${props.direction ? 'ri-arrow-up-line' : ''} `}></i>}
    </div>)
}

export default function TierSearch() {
    const [tierLists, setTierLists] = useState([]);
    const httpService = useContext(httpServiceContext);
    const navigate = useNavigate();

    const [sortState, setSortState] = useState<SortHeaderState>({
        direction: "down",
        activeHeader: 'date',
        type: "",
        index: 0
    })

    const options: MultiOptionToggleValue[] = [{display: 'Episodes', value: 'episodes'}, {display: 'Both', value: ''}, {display: 'Characters', value: 'characters'}]

    const [loadingState, setLoaderState] = useState(false);

    const loadData = (state?: SortHeaderState) => {
        if (!state) {
            state = sortState;
        }
        setLoaderState(true);

        httpService.loadTiersList({ orderByCount: state.activeHeader === "ranked", descending: state.direction === "down", type: state.type }, state.index).then(tiers => {
            setTierLists(tiers.entities);
            setLoaderState(false);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const viewTier = (type: string, id: number) => { navigate(`/${type}/${id}`, { replace: true }) };
    const toggleSortHeader = (data: { direction: SortDirection, id: string }) => {
        setSortState({
            ...sortState,
            direction: data.direction,
            activeHeader: data.id
        })

        loadData({
            direction: data.direction,
            activeHeader: data.id,
            type: sortState.type,
            index: sortState.index
        });
    }

    const changePage = (next: boolean) => {
        const newIndex = sortState.index + (next ? 1 : -1);
        let currentState = {
            ...sortState,
            index: newIndex
        }
        setSortState(currentState)

        loadData(currentState)
    }

    const changeType = (next: MultiOptionToggleValue) => {
        let currentState = {
            ...sortState,
            type: next.value
        }

        setSortState(currentState)

        loadData(currentState)
    }

    const headers = [{ display: 'type', sortId: 'type', disabled: true }, { display: '# ranked', sortId: 'ranked' }, { display: 'last Updated', sortId: 'date' }]

    return (
        <div className="landing-table">
            <div className="tier-title">
                <h2>User Tier Lists</h2>
                <MultiOptionToggle values={options} disabled={loadingState} toggle={changeType} defaultIndex={1}></MultiOptionToggle>
            </div>


            <table className="landing-table-container" >
                <thead>
                    <tr>
                        {headers.map(header => (
                            <td key={header.sortId}>
                                <SortHeader id={header.sortId} displayText={header.display} toggled={toggleSortHeader} disabled={header.disabled || loadingState}
                                    direction={sortState.activeHeader === header.sortId ? sortState.direction : null}></SortHeader>
                            </td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tierLists.map(tier => (
                        <tr key={tier.id} onClick={() => viewTier(tier.type, tier.id)}>
                            <td>
                                {tier.type}
                            </td>
                            <td>
                                {tier.rankedCount}
                            </td>
                            <td>
                                {tier.lastUpdated && relativeTime.from(new Date(tier.lastUpdated))}
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
            <div className="flex-align-right">
                <Pager onClick={changePage} disableFirst={sortState.index === 0} disableLast={tierLists.length < paginationLimit} loading={loadingState}></Pager>
            </div>
        </div>
    )
}
