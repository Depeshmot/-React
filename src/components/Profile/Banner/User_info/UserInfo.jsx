import React from 'react';
import style from '../User_info/UserInfo.module.css';

const UserInfo = () => {
    return(
        <div className={style.container}>
            <div className={style.title}>
                <a>Ivan Ivanov</a>
            </div>
            <div className={style.flex_container}>
                <div className='subscribers'>
                    <a>230</a><br></br>
                    <a>Subscribers</a>
                </div>
                <div className={style.followers}>
                    <a>357</a><br></br>
                    <a>Followers</a>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;