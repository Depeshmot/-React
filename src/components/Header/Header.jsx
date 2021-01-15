import React from 'react';
import style from '../Header/Header.module.css';

const Header = () => {
    return(
        <div className={style.container}>
            <div className='header__items'>
                <nav className='menu'>
                    <h2>Header</h2>
                </nav>
            </div>
        </div>
    );
}

export default Header;