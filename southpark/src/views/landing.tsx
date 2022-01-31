import React from "react";
import { useParams } from "react-router-dom";

export class Landing extends React.Component<{}, any> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Why?</h5>
                    <div>
                        Great question, my girlfriend Kiersten started watching southpark for the first time
                    </div>
                </div>
            </div>
        )
    }
}