import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { episodes } from "../all_episodes";
import { BarChart } from "../components/breakdown";
import LoadingScreen from "../components/loading-screen";
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

    useEffect(() => {
        httpService.loadTiers(episodeType, episodes, id).then(tier => {
            setState({
                loading: false,
                episodesMap: tier,
                listOrder: httpService.getTierList()
            })
        })
    }, [])


    let grid = (<LoadingScreen></LoadingScreen>)

    if (!state.loading) {
        grid = <Grid groups={state.episodesMap} RenderComponent={MemoEp}
        leftSpaceContent={ <BarChart ranks={state.episodesMap}></BarChart>}
            listOrder={state.listOrder} disabled={true}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
