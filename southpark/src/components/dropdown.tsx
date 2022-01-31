import React, { useContext, useState } from "react";
import { LogOut } from "./google-auth";

export function DropDown() {
    const [state, setState] = useState(false);

    let dropdown: any = "";
    if (true || state) {
        dropdown = (<div className="dropdown-content">
            <div className="user-dropdown rounded">
                <ul>
                    <li>My Episode Ranks</li>
                    <li>My Character Ranks</li>
                    <li>
                        <div style={{margin:'auto'}}>
                        <LogOut></LogOut>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
    }

    return (
        <div className="dropdown-container" onBlur={() => { setState(false) }}>
            <button className="simple-button" onClick={() => { setState(!state) }}>Jeff Jarry</button>
            {dropdown}
        </div>
    )
}