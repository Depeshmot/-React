import React from 'react';
import logo from '../Sidebar/logo/Social Dashboard..svg';
import style from '../Sidebar/Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img alt='img' src={logo}></img>
            </div>
            <div>
            <nav>
                <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink><br></br>
                </div>
                <div className={`${style.item} ${style.active}`}>
                <NavLink to='/dialogs' activeClassName={style.active}>Dialogs</NavLink><br></br>
                </div>
                <div className={`${style.item} ${style.active}`}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink><br></br>
                </div>
                <div className={`${style.item} ${style.active}`}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink><br></br>
                </div>
                <div className={`${style.item} ${style.active}`}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </nav>
            </div>
            
        </div>
    );
}

export default SideBar;