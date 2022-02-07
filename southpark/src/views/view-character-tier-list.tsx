import React, { useContext, useState } from "react";
import { characters } from "../all_characters";
import { CharacterItem } from "../components/character-tile";
import { Grid } from "../components/sortable";
import { characterType } from "../constants";
import { httpServiceContext } from "../services/http.service";

export function ViewEpisodeList() {
    const httpService = useContext(httpServiceContext);
    const [state, setState] = useState<any>({
        loading: true,
        episodesMap: null,
        listOrder: []
    });

    if(!state.episodesMap) {
        httpService.loadTiers(characterType, characters).then(tier => {
            setState({
                loading: false,
                episodesMap: tier,
                listOrder: httpService.getTierList()
            })
        })
    }


    let grid = (<div>Login to start</div>)

    if (!state.loading) {
        grid = <Grid groups={state.episodesMap} RenderComponent={CharacterItem}
            listOrder={state.listOrder}></Grid>
    }


    return (<div>
        {grid}
    </div>)
}
