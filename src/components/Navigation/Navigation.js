import React from 'react';
import './Navigation.css';

const Navigation = ({ isLoggedIn, onRouteChange }) => {
    return (
         (isLoggedIn) ? 
        (<nav className='credentials'>
            <p 
            style=
            {{display: 'flex', 
            justifyContent:"flex-end", 
            paddingRight: 20}}
            onClick={() => onRouteChange('signin')}>Sign Out</p>
        </nav>) : (
            <nav className='credentials' style={{display: 'flex', justifyContent:"flex-end", paddingRight: 20}}>
            <p 
            style=
            {{paddingRight: 20}}
            onClick={() => onRouteChange('signin')}
            >Login
            </p>
            <p 
            onClick={() => onRouteChange('register')}
            >Register
            </p>
            </nav>
        )
    )
}

export default Navigation;