import React from 'react';
import style from '../Dialogs/Dialogs.module.css';
import Header from '../Header/Header';

const Dialogs = () => {
    return(
        <div className={style.container}>
            <Header/>
            <h2>My Dialogs</h2>
        </div>
    );
}

export default Dialogs;