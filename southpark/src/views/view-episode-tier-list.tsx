import React from "react";
import { useParams } from "react-router-dom";
import { MemoEp } from "../components/row";
import { Grid } from "../components/sortable";

export class ViewEpisodeList extends React.Component<{}, any> {
    constructor(props) {
        super(props);

        let { id } = useParams();
    }

    render() {
        let grid = (<div>Loading tier list</div>)

    if (!this.state.loading) {
      grid = <Grid groups={this.state.episodesMap} RenderComponent={MemoEp}
        listOrder={this.state.listOrder} disabled={true}></Grid>
    }

    
    return ({grid})
    }
}