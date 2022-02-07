import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../user-context';
import { DropDown } from './dropdown';
import { Login, LogOut } from './google-auth';

export const Header = () => {
    const { loggedIn } = useContext(UserContext);

    let defaultAuth = (<Login></Login>);

    if (loggedIn) {
        defaultAuth = (<DropDown dropdownContent={ <ul >
            <li><Link to={'episodes/mine'}> My Episode Ranks</Link></li>
            <li><Link to={'characters/mine'}> My Character Ranks</Link></li>
            <li>
                <div style={{margin:'auto'}}>
                <LogOut></LogOut>
                </div>
            </li>
        </ul> } dropdownToggle={
                        <button className="simple-button user-info-button">Jeff Jarry <i className="ri-arrow-down-s-line"></i></button>
        }></DropDown>)
    }

    return (<div className='header shadow'>
        <h1 className='site-title'>
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
