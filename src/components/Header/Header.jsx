import React from 'react';
import style from '../Header/Header.module.css';

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.header__items}>
                <div>
                    <form>
                        <input  placeholder="Искать здесь..."/>
                            <button></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;