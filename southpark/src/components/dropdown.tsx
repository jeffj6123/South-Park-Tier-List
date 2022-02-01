import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./google-auth";

export function DropDown() {
    const [state, setState] = useState(false);

    let dropdown: any = "";
    if (state) {
        dropdown = (<div className="dropdown-content">
            <div className="user-dropdown rounded">
                <ul>
                    <li onClick={(e) => e.stopPropagation()}><Link to={'mine'}> My Episode Ranks</Link></li>
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
        // onBlur={() => { setState(false) }}
        <div className="dropdown-container" >
            <button className="simple-button user-info-button" onClick={() => { setState(!state) }}>Jeff Jarry</button>
            {dropdown}
        </div>
    )
}