import React from 'react';
import "./App.css";
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Stulogin from './components/studentlogin/stulogin.jsx';
import Stalogin from './components/stafflogin/stalogin.jsx';
import Basket from './pages/basket/basket.jsx';
import Chat from './pages/chat/chat.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router >    
      <Routes>    
      <Route exact path='/' element = {<Login /> }/> 
        <Route path='/home' element = {<Home /> }/> 
        <Route path='/stalogin' element = {<Stalogin /> }/>
        <Route path='/stulogin' element = {<Stulogin /> }/>
        <Route path='/basket' element= {<Basket />} />
        <Route path='/chat' element= {<Chat />} />
      </Routes>
    </Router >  
    </div>
  );
}

export default App;