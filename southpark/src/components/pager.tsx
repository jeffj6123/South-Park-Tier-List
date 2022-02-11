import React from 'react';

export interface PagerProps {
    disableFirst?: boolean;
    disableLast?: boolean;
    onClick(moveLast: boolean): void;
}

export default function Pager(props: PagerProps) {

    return (<div className='pager'>
        <button className={`pager-button ${props.disableFirst ? 'disabled': null}`} onClick={() => props.onClick(true)}>
            <i className="ri-arrow-left-s-line"></i>
        </button>

        <button className={`pager-button ${props.disableLast ? 'disabled': null}`} onClick={() => props.onClick(false)}>
        <i className="ri-arrow-right-s-line"></i>
        </button>
    </div>)
}