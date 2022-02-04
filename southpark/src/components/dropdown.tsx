import React, { Component, ReactNode, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./google-auth";

export interface DropDownProps {
    dropdownToggle: ReactNode;
    dropdownContent: ReactNode;
}

export function DropDown(props: DropDownProps) {
    const [state, setState] = useState(false);

    let dropdown: any = "";
    if (state) {
        dropdown = (<div className="dropdown-content">
            <div className="user-dropdown" onMouseDown={(e) => {e.preventDefault();}} onClick={() => setState(false)}>
                {props.dropdownContent}
                {/* <ul >
                    <li ><Link to={'episodes/mine'}> My Episode Ranks</Link></li>
                    <li>My Character Ranks</li>
                    <li>
                        <div style={{margin:'auto'}}>
                        <LogOut></LogOut>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>)
    }

    return (
        <div className="dropdown-container" onBlur={() => { setState(false) }}>
            <button className="simple-button user-info-button" onClick={() => { setState(!state) }}>Jeff Jarry <i className="ri-arrow-down-s-line"></i></button>
            {dropdown}
        </div>
    )
}