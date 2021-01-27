import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from '../Profile/Profile.module.css';
import Banner from '../Profile/Banner/Banner';

const Profile = () => {
    return(
        <div className={style.container}> 
        <Banner/>
        <MyPosts/>
        </div>
    );
}

export default Profile;