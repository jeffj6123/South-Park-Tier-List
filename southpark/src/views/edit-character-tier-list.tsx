import React, { useContext, useEffect, useState } from "react";
import { characters } from "../all_characters";
import { MemoCharacterItem } from "../components/character-tile";
import PromiseLockedButton from "../components/save-button";
import { Grid } from "../components/sortable";
import { characterType } from "../constants";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";
import { useOnUnload } from "../utils/unloadHook";

export function EditCharacterList() {
    const { loggedIn } = useContext(UserContext);
    const httpService = useContext(httpServiceContext);
    const [state, setState] = useState<any>({
        loading: true,
        characterMap: null,
        listOrder: []
    });
    const [pendingChanges, setPendingChanges] = useOnUnload(false, "You have unsaved changes! Are you sure you want to leave?")

    useEffect(() => {
        if (loggedIn) {
            httpService.loadTiers(characterType, characters).then(tier => {
                setState({
                    loading: false,
                    characterMap: tier,
                    listOrder: httpService.getTierList()
                })
            })
        }
    }, [loggedIn])

    const saveChanges = () => {
        return httpService.saveTierList(characterType, state.characterMap);
    }

    const updatedState = (changes) => {
        setState({ ...state, characterMap: changes });
        setPendingChanges(true);
    }

    let grid = (<div>Login to start</div>)

    let saveButton;

    if (pendingChanges) {
        saveButton = (<div className="save-button">
            <PromiseLockedButton promiseCallBack={saveChanges} neutralDisplay='Save' onSuccess={() => { setPendingChanges(false) }}
                activeDisplay='Saving'></PromiseLockedButton>
        </div>)
    }

    if (!state.loading) {
        grid = <Grid groups={state.characterMap} RenderComponent={MemoCharacterItem} rightSpaceContent={saveButton}
            listOrder={state.listOrder} orderChange={updatedState}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
