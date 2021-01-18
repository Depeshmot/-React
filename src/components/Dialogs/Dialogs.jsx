import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Dialogs/Dialogs.module.css';
import Dialog from './Dialog/Dialog';



const Dialogs = () => {
    return (
        <div className={style.container}>
            <div className={style.items}>
                <div className={style.item}>
                    <NavLink style={{ textDecoration: 'none' }} to='/dialog/1'><Dialog  id='1' /></NavLink>
                </div>
                <div className={style.item}>
                    <NavLink style={{ textDecoration: 'none' }} to='/dialog/2'><Dialog  id='2' /></NavLink>
                </div>
                <div className={style.item}>
                    <NavLink style={{ textDecoration: 'none' }} to='/dialog/3'><Dialog  id='3' /></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;