import React, { useContext, useEffect, useState } from "react";
import { episodes } from "../all_episodes";
import { MemoEp } from "../components/row";
import PromiseLockedButton from "../components/save-button";
import { Grid } from "../components/sortable";
import { episodeType } from "../constants";
import { httpServiceContext } from "../services/http.service";
import { UserContext } from "../user-context";
import { useOnUnload } from "../utils/unloadHook";

export function EditEpisodeList() {
    const httpService = useContext(httpServiceContext);
    const listOrder = httpService.getTierList()

    const { loggedIn } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<any>({
        episodesMap: null,
    });
    const [pendingChanges, setPendingChanges] = useOnUnload(false, "You have unsaved changes! Are you sure you want to leave?")

    useEffect(() => {
        if (loggedIn) {
            httpService.loadTiers(episodeType, episodes).then(tier => {
                setState({
                    episodesMap: tier,
                })
                setLoading(false);
            })
        }
    }, [loggedIn])

    const saveChanges = () => {
        return httpService.saveTierList(episodeType, state.episodesMap);
    }

    const updatedState = (changes) => {
        setState({ episodesMap: changes });
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


    if (!loading && state.episodesMap) {
        grid = <Grid groups={state.episodesMap} RenderComponent={MemoEp} rightSpaceContent={saveButton}
            listOrder={listOrder} orderChange={updatedState}></Grid>
    }

    return (<div>
        {grid}
    </div>)
}
