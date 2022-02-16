import React, { useState } from "react";

export interface ToggleProps {
    value?: boolean;
    disabled?: boolean;
    // toggle: (state: boolean) => void;
}

export default function Toggle(props: ToggleProps) {


    return (<label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
    </label>)
}

export interface MultiOptionToggleValue {
    display: string;
    value: string;
}

export interface MultiToggleProps {
    defaultIndex?: number;
    values: MultiOptionToggleValue[];
    disabled?: boolean;
    toggle: (state: MultiOptionToggleValue) => void;
}

export function MultiOptionToggle(props: MultiToggleProps) {
    const [active, setActive] = useState<MultiOptionToggleValue>(props.defaultIndex ? props.values[props.defaultIndex] : {display: 'default', value: null})

    const setNewActive = (value: MultiOptionToggleValue) => {
        setActive(value);
        props.toggle(value);
    }

    return (<div className={`multi-option-container ${props.disabled ? 'disabled': 'active'}`}>
        {props.values.map(value => (
            <button disabled={props.disabled} key={value.display}  onClick={() => setNewActive(value)}
                    className={`simple-button ${value.value === active.value ? 'active': ''}`}>
                {value.display}
            </button>
        ))}
    </div>)
}

