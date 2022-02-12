import React from 'react';

export interface PagerProps {
    disableFirst?: boolean;
    disableLast?: boolean;
    loading?: boolean;
    onClick(moveLast: boolean): void;
}

export default function Pager(props: PagerProps) {

    return (<div className='pager'>
        <button className={`pager-button back ${props.disableFirst ? 'disabled': 'active'}`} onClick={() => props.onClick(true)}>
            <i className="ri-arrow-left-s-line"></i>
        </button>

        <button className={`pager-button next ${props.disableLast ? 'disabled': 'active'}`} onClick={() => props.onClick(false)}>
        <i className="ri-arrow-right-s-line"></i>
        </button>

        <div className='loader'>
            <i className="ri-loader-5-fill rotate"></i>
        </div>
    </div>)
}