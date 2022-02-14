import React from 'react';

export interface PagerProps {
    disableFirst?: boolean;
    disableLast?: boolean;
    loading?: boolean;
    onClick(next: boolean): void;
}

export default function Pager(props: PagerProps) {
    const firstDisabled = props.disableFirst || props.loading;
    const lastDisabled = props.disableLast || props.loading;

    return (<div className='pager'>
        {props.loading && <div>
            <div className='loader rotate'>
                <i className="ri-loader-5-fill"></i>
            </div>
        </div>}

        <button className={`pager-button back ${firstDisabled ? 'disabled': 'active'}`} onClick={() => firstDisabled ? null : props.onClick(false)}>
            <i className="ri-arrow-left-s-line"></i>
        </button>

        <button className={`pager-button next ${lastDisabled ? 'disabled': 'active'}`} onClick={() => lastDisabled ? null : props.onClick(true)}>
        <i className="ri-arrow-right-s-line"></i>
        </button>
    </div>)
}