import React from "react";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";

export class EditEpisodeList extends React.Component<{}, any> {
    constructor(props) {
        super(props);

        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges(changes: any) {

    }

    render() {
        let grid = (<div>Login to start</div>)

    if (!this.state.loading) {
      grid = <Grid groups={this.state.episodesMap} RenderComponent={MemoEp}
        listOrder={this.state.listOrder} orderChange={this.saveChanges}></Grid>
    }

    
    return ({grid})
    }
}