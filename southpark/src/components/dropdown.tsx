import React, { ReactNode, useState } from "react";

export interface DropDownProps {
    dropdownToggle: ReactNode;
    dropdownContent: ReactNode;
}

export function DropDown(props: DropDownProps) {
    const [state, setState] = useState(false);

    let dropdown: any = "";
    if (state) {
        dropdown = (<div className="dropdown-content">
            <div className="user-dropdown" onMouseDown={(e) => { e.preventDefault(); }} onClick={() => setState(false)}>
                {props.dropdownContent}

            </div>
        </div>)
    }

    return (
        <div className="dropdown-container" onBlur={() => { setState(false) }}>
            <div onClick={() => { setState(!state) }}>
                {props.dropdownToggle}
            </div>
            {dropdown}
        </div>
    )
}