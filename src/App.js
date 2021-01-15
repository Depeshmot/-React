import React from 'react';
import './App.css';
import SideBar from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return(
    <BrowserRouter>
    <div className='main-container'>
      <SideBar/>
      <Route path='/profile' component={Profile}/>
      <Route path='/dialogs' component={Dialogs}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
    </div>
    </BrowserRouter>

  );
}

export default App;
