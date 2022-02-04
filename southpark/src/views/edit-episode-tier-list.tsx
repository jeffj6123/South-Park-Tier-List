import React, { useContext, useState } from "react";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";

export function EditEpisodeList() {
    const httpService = useContext(httpServiceContext);
    const { loggedIn } = useContext(UserContext);
    const [state, setState] = useState<any>({
        loading: true,
        episodesMap: null,
        listOrder: []
    });

    if (!state.episodesMap && loggedIn) {
        httpService.loadTiers().then(tier => {
            setState({
                loading: false,
                episodesMap: tier,
                listOrder: httpService.getTierList()
            })
        })
    }


    const saveChanges = (changes: any) => {
        httpService.saveTierList(changes);
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
