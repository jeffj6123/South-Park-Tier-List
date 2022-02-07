import React, { useContext, useEffect, useState } from "react";
import { episodes } from "../all_episodes";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";
import { episodeType } from "../constants";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";

export function EditEpisodeList() {
    const httpService = useContext(httpServiceContext);
    const listOrder = httpService.getTierList()

    const { loggedIn } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<any>({
        episodesMap: null,
    });

    useEffect(() => {
        httpService.loadTiers(episodeType, episodes).then(tier => {
            setState({
                episodesMap: tier,
            })
            setLoading(true);
        })
    }, [])

    // if (!state.episodesMap && loggedIn) {
    //     httpService.loadTiers(episodeType, episodes).then(tier => {
    //         setState({
    //             loading: false,
    //             episodesMap: tier,
    //             listOrder: httpService.getTierList()
    //         })
    //     })
    // }


    const saveChanges = (changes: any) => {
        httpService.saveTierList(episodeType, changes);
    }

    let grid = (<div>Login to start</div>)

    if (!state.loading && loggedIn) {
        grid = <Grid groups={state.episodesMap} RenderComponent={MemoEp}
            listOrder={state.listOrder} orderChange={saveChanges}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
