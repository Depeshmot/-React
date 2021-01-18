import React from 'react';
import style from '../Dialog/Dialog.module.css';
import Avatar from '../Avatar/Avatar.jsx';
import LastMessege from '../LastMessege/LastMessege.jsx';

const Dialog = () => {
    return(
        <div className={style.container}>
            <div className={style.banner}>
            </div>
            <div className={style.user_info_container}>
            <div className={style.avatar_icon}>
            <Avatar/>
            </div>
            <div className={style.last_messege}>
            <LastMessege/>
            </div>
            </div>
        </div>
    );
}

export default Dialog;