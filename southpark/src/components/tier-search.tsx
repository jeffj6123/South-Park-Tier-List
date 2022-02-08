import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import RelativeTime from '@yaireo/relative-time'
import { httpServiceContext } from "../services/http.service";

type SortDirection = "up" | "down";

export interface SortHeaderState {
    direction: SortDirection;
    activeHeader: string;
}

export interface SortHeaderProps {
    id: string;
    displayText: React.ReactNode;
    direction?: SortDirection;
    toggled: ({direction: SortDirection, id: string}) => void;
}

export function SortHeader(props: SortHeaderProps) {
    return (<div className="table-header" onClick={() => props.toggled({id: props.id, direction: (props.direction === 'up' ? 'down': 'up')})}>
        {props.displayText}
        {props.direction && <i className={`arrow ${props.direction} ri-arrow-${props.direction}-line`}></i>}
    </div>)
}

export default function TierSearch() {
    const [tierLists, setTierLists] = useState([]);
    const relativeTime = new RelativeTime(); 
    const httpService = useContext(httpServiceContext);
    const navigate = useNavigate();

    const [sortState, setSortState] = useState<SortHeaderState>({
        direction: "down",
        activeHeader: 'date'
    })

    useEffect(() => {
        httpService.loadTiersList().then(tiers => {
            setTierLists(tiers.entities);
        })
    }, [])


    const viewTier = (type: string, id: number) => { navigate(`/${type}/${id}`, {replace: true}) };
    const toggleSortHeader = (data: {direction: SortDirection, id: string}) => {
        setSortState({
            direction: data.direction,
            activeHeader: data.id
        })
    }

    const headers = [{ display: 'type', sortId: 'type' }, { display: '# ranked', sortId: 'ranked' }, { display: 'last Updated', sortId: 'date' }]

    return (
        <div className="landing-table">
            <table className="landing-table-container" >
                <thead>
                    <tr>
                        {headers.map(header => (
                            <td key={header.sortId}>
                                <SortHeader id={header.sortId} displayText={header.display} toggled={toggleSortHeader}
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
        </div>
    )
}
