import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from '../Profile/Profile.module.css';
import Header from '../Header/Header';
import Banner from '../Profile/Banner/Banner';

const Profile = () => {
    return(
        <div className={style.container}> 
        <Header/>
        <Banner/>
        <MyPosts/>
        </div>
    );
}

export default Profile;