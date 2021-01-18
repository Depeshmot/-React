import React from 'react';
import style from '../Banner/Banner.module.css';
import banner from '../img/main_banner.jpg';
import Avatar from '../Banner/Avatar/Avatar.jsx';
import UserInfo from '../Banner/User_info/UserInfo';

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={banner}></img>
            </div>
            <div className={style.user_info_container}>
            <div className={style.avatar_icon}>
            <Avatar/>
            </div>
            <div className={style.user_info}>
            <UserInfo/>
            </div>
            </div>
            
        </div>
    );
}

export default Banner;