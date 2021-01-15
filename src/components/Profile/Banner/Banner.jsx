import React from 'react';
import style from '../Banner/Banner.module.css';
import main_banner from '../img/main_banner.jpg';

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <img src={main_banner}></img>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Banner;