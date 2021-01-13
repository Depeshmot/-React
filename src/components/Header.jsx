import React from 'react';
import headerLogo from '../physics.svg';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header__items'>
                <nav className='menu'>
                    <img className='header-logo' alt='img' src={headerLogo}></img>
                </nav>
            </div>
        </div>
    );
}

export default Header;