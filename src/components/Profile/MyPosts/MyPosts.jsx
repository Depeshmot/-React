import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post.jsx';
import {addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map ( p => <Post message={p.message} addPost={props.addPost}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.container}>
            <h2>My Posts</h2>
            <div className={style.textarea}>
                <textarea placeholder="What's new...?" ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
                
            </div>
        </div>
        
    );
}

export default MyPosts;