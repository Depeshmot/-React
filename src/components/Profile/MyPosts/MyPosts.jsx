import React from 'react';
import style from '../MyPosts/MyPosts.module.css';
import Post from '../MyPosts/Post/Post';

function MyPosts() {
    return (
        <div className={style.container}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post name='Ivan' age='30'/>
                <Post/>
                <Post/>
            </div>
        </div>

    );
}

export default MyPosts;