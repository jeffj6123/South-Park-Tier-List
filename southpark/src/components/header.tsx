import React, { useContext } from 'react';
import { UserContext } from '../user-context';
import { Login, Logout } from './google-auth';

export const Header = () => {
    const { loggedIn, name } = useContext(UserContext);
    
    let user = (<Login></Login>);
    
    if(loggedIn) {
        user = (<div style={{display: 'flex'}}>{name} <Logout></Logout></div>)
    }

    return (<div className='header shadow'>
        <div>
        South Park Tier List
        </div>
        {user}
    </div>)
}

export default Header;
