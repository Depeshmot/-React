import React from 'react';
import './App.css';
import SideBar from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

  return(
    <BrowserRouter>
    <div className='main-container'>
      <SideBar/>
      <Route  path='/profile' render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/> }/>
      <Route  path='/dialogs' render={ () => <Dialogs dialogsData={props.state.messegePage.dialogsData} messageData={props.state.messegePage.messageData}/> }/>
      <Route  path='/news' render={ () => <News/> }/>
      <Route  path='/music' render={ () => <Music/> }/>
      <Route  path='/settings' render={ () => <Settings/> }/>
    </div>
    </BrowserRouter>

  );
}

export default App;
