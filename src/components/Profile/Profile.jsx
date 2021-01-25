import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from '../Profile/Profile.module.css';
import Banner from '../Profile/Banner/Banner';

const Profile = (props) => {

    return(
        <div className={style.container}> 
        <Banner/>
        <MyPosts posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;