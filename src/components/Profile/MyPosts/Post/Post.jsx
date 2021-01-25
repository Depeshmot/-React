import React from 'react';
import style from '../Post/Post.module.css';

const Post = (props) => {
    return(
        <div className={style.container}>
            <h2>Fuck you</h2>
            {props.message}
        </div>
    );
}

export default Post;