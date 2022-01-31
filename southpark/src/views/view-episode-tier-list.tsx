import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";

export function ViewEpisodeList() {
    let { id } = useParams();
    const [state, setState] = useState({
        loading: true,
        episodesMap: {},
        listOrder: []
    });


    let grid = (<div>Loading tier list</div>)

    if (!state.loading) {
        grid = <Grid groups={state.episodesMap} RenderComponent={MemoEp}
            listOrder={state.listOrder} disabled={true}></Grid>
    }


    return (<div>
        {grid}
    </div>)
}
