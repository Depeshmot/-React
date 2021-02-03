import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from '../Profile/Profile.module.css';
import Banner from '../Profile/Banner/Banner';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';

const Profile = (props) => {

    return(
        <div className={style.container}> 
        <Banner/>
        <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;