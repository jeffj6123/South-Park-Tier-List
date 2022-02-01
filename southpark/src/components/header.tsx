import React, { useContext } from 'react';
import { UserContext } from '../user-context';
import { DropDown } from './dropdown';
import { Login } from './google-auth';

export const Header = () => {
    const { loggedIn, name } = useContext(UserContext);

    let defaultAuth = (<Login></Login>);

    if (loggedIn) {
        defaultAuth = (<DropDown></DropDown>)
    }

    return (<div className='header shadow'>
        <h1>
            South Park Tier List
        </h1>
        <div style={{
            'marginRight': 10
        }}>
            {defaultAuth}
        </div>
    </div>)
}

export default Header;
