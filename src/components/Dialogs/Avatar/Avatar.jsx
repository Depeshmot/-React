import React from 'react';
import avatar from '../Avatar/Avatar_icon.jpg';
import style from '../Avatar/Avatar.module.css';

const Avatar = () => {
    return(
        <div className={style.container}>
            <img className={style.icon} src={avatar}></img>
        </div>
    );
}

export default Avatar;