import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { episodes } from "../all_episodes";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";
import { episodeType } from "../constants";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";

export function ViewEpisodeList() {
    let { id } = useParams();

    const httpService = useContext(httpServiceContext);
    const { loggedIn } = useContext(UserContext);
    const [state, setState] = useState<any>({
        loading: true,
        episodesMap: null,
        listOrder: []
    });

    if (!state.episodesMap && loggedIn) {
        httpService.loadTiers(episodeType, episodes, id).then(tier => {
            setState({
                loading: false,
                episodesMap: tier,
                listOrder: httpService.getTierList()
            })
        })
    }

    let grid = (<div>Login to start</div>)

    if (!state.loading && loggedIn) {
        grid = <Grid groups={state.episodesMap} RenderComponent={MemoEp}
            listOrder={state.listOrder} disabled={true}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
