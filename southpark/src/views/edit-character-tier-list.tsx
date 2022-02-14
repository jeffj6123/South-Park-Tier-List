import React, { useContext, useEffect, useState } from "react";
import { characters } from "../all_characters";
import { CharacterItem, MemoCharacterItem } from "../components/character-tile";
import { Grid } from "../components/sortable";
import { characterType } from "../constants";
import { httpServiceContext } from "../services/http.service";

export function EditCharacterList() {
    const httpService = useContext(httpServiceContext);
    const [state, setState] = useState<any>({
        loading: true,
        characterMap: null,
        listOrder: []
    });

    useEffect(() => {
        httpService.loadTiers(characterType, characters).then(tier => {
            setState({
                loading: false,
                characterMap: tier,
                listOrder: httpService.getTierList()
            })
        })
    }, [])

    const saveChanges = (changes: any) => {
        httpService.saveTierList(characterType, changes);
    }

    let grid = (<div>Login to start</div>)

    if (!state.loading) {
        grid = <Grid groups={state.characterMap} RenderComponent={MemoCharacterItem}
            listOrder={state.listOrder} orderChange={saveChanges}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
