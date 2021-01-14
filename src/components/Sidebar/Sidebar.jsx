import React from 'react';
import logo from '../Sidebar/logo/Social Dashboard..svg';
import style from '../Sidebar/Sidebar.module.css';

const SideBar = () => {
    return(
        <div className={style.container}>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className={style.item}>
            <nav>
                <a>Profile</a><br></br>
                <a>Messegies</a><br></br>
                <a>News</a><br></br>
                <a>Music</a><br></br>
                <a>Settings</a>
            </nav>
            </div>
        </div>
    );
}

export default SideBar;