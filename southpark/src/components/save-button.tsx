import React, { useState } from "react";

export interface SaveButtonProps {
    promiseCallBack: () => Promise<any>;
    onSuccess?: () => void;

    neutralDisplay: React.ReactNode;
    activeDisplay: React.ReactNode;
}

export default function PromiseLockedButton(props: SaveButtonProps) {
    const [inProgress, setProgress] = useState(false);

    const start = () => {
        setProgress(true);
        props.promiseCallBack().then(() => {
            if(props.onSuccess) {
                props.onSuccess();
            }
            setProgress(false);
        })
    }

    return (<button className="simple-button primary" disabled={inProgress} onClick={start}>
        {inProgress ? props.activeDisplay : props.neutralDisplay}
    </button>)
}