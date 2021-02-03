import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator()); // addPostActionCreator - это функция которая возварщает action она принемает какие то параметры 
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts 
        updateNewPostText={onPostChange} 
        addPost={addPost} 
        posts={state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}/>

    );
}

export default MyPostsContainer; // Задача container component удволитворить нужды presentation component