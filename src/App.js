import React from 'react';
import './App.css';
import SideBar from './components/Sidebar/Sidebar.jsx';
import MainContent from './components/Maincontant/Maincontent.jsx';


// function App() {
//   return ( // JSX разметка - это HTML встроенный в Javascript
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My fuckin new app<code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return(
    <div className='main-contant'>
      <SideBar/>
      <MainContent/>
    </div>
  );
}

export default App;
