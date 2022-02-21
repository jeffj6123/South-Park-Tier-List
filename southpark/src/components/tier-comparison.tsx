import React, { useContext } from 'react';
import { HttpService, httpServiceContext, IRank } from '../services/http.service';

export interface CompareTierProps {
    item: IRank;
    myRank: string;
}

export function CompareTier(props: CompareTierProps) {
    const httpService = useContext(httpServiceContext);

    const rankCompare = httpService.compareRanks(props.myRank, props.item.rank);

    return (<div>

    </div>)
}