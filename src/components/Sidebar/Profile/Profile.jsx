import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from '../Profile/Profile.module.css';

const Profile = () => {
    return(
        <div className={style.container}> 
        
        <MyPosts/>
        </div>
    );
}

export default Profile;