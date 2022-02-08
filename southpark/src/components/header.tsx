import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../user-context';
import { DropDown } from './dropdown';
import { Login, LogOut } from './google-auth';

export const Header = () => {
    const { loggedIn } = useContext(UserContext);
    const [offSet, setOffset] = useState(-5);
    const offSetRef = useRef(offSet);
    offSetRef.current = offSet;

    const [cartmanVisible, setCartmanVisible] = useState(false);
    const [isCoon, setCoonState] = useState(false);
    const isCoonRef = useRef(isCoon);
    isCoonRef.current = isCoon;

    const cartmanWalk = () => {
        //reset position
        setCartmanVisible(true);
        setOffset(-5);

        const intervalId = setInterval(() => {
            if(offSetRef.current > 110 || isCoonRef.current) {
                clearInterval(intervalId);
                setCartmanVisible(false);
            }else{
                setOffset(offSetRef.current + 1.5);   
            }
        }, 500)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!isCoonRef.current) {
                cartmanWalk();
            }
        }, 60000)

        //todo clear both ids
        return () => clearInterval(intervalId);
    }, [])

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
        {(cartmanVisible || isCoon) && 
            <img src={`${isCoon ? '/coon.gif' : '/cartman-sneak.gif'}`} className='cartman' style={{right: `${offSet}%`}}
             onClick={() => setCoonState(true)}/>
        }
        
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
