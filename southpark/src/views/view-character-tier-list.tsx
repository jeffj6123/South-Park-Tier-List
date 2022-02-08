import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../all_characters";
import { CharacterItem } from "../components/character-tile";
import { Grid } from "../components/sortable";
import { characterType } from "../constants";
import { httpServiceContext } from "../services/http.service";

export function ViewCharacterList() {
    let { id } = useParams();
    const httpService = useContext(httpServiceContext);
    const [state, setState] = useState<any>({
        loading: true,
        episodesMap: null,
        listOrder: []
    });

    useEffect(() => {
        httpService.loadTiers(characterType, characters, id).then(tier => {
            setState({
                loading: false,
                episodesMap: tier,
                listOrder: httpService.getTierList()
            })
        })
        console.log(state)
    }, []);

    let grid = (<div>Loading List</div>)

    if (!state.loading) {
        grid = <Grid groups={state.episodesMap} RenderComponent={CharacterItem}
            listOrder={state.listOrder}></Grid>
    }


    return (<div>
        {grid}
    </div>)
}
