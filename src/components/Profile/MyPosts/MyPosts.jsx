import React from 'react';
import style from '../MyPosts/MyPosts.module.css';

function MyPosts() {
    return (
        <div className={style.container}>
            <h2>My Posts</h2>
            <div className={style.textarea}>
                <textarea placeholder="What's new...?"></textarea>
                <button>Add post</button>
            </div>
        </div>
        

    );
}

export default MyPosts;