import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../user-context';
import { DropDown } from './dropdown';
import { Login } from './google-auth';

export const Header = () => {
    const { loggedIn } = useContext(UserContext);

    let defaultAuth = (<Login></Login>);

    if (loggedIn) {
        defaultAuth = (<DropDown></DropDown>)
    }

    return (<div className='header shadow'>
        <h1>
            <Link to={'/'}>South Park Tier List</Link>
        </h1>
        <div style={{
            'marginRight': 10
        }}>
            {defaultAuth}
        </div>
    </div>)
}

export default Header;
