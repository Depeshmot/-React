import React from 'react';
import style from '../Post/Post.module.css';

const Post = () => {
    return(
        <div className={style.container}>
            <ul>
                <li>User Name</li>
                <li>User Email</li>
                <li>User Information</li>
            </ul>
        </div>
    );
}

export default Post;