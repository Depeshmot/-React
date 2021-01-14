import React from 'react';
import Profile from '../Sidebar/Profile/Profile';
import Header from './Header/Header';



const MainContent = () => {
    return (
        <div className='MainContent'>
            <Header/>
            <Profile/>
        </div>
    );
}

export default MainContent;