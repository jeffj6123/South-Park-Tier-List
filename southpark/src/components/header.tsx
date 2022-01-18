import React from 'react';
import Login from './google-auth';

export const Header = () => {
    return (<div className='header shadow'>
        South Park Tier List
{/* 
        <div>
            <input></input>
        </div> */}
        <Login></Login>
    </div>)
}

export default Header;
