import React, { useContext } from 'react';
import { UserContext } from '../user-context';
import { DropDown } from './dropdown';
import { Login } from './google-auth';

export const Header = () => {
    const { loggedIn, name } = useContext(UserContext);
    return (<div className='header shadow'>
        <h1>
            South Park Tier List
        </h1>
        <div style={{'marginRight': 10 
    }}>
            <DropDown></DropDown>
        </div>
        {/* <div className='auth-login'>{name} <Login></Login></div> */}
    </div>)
}

export default Header;
