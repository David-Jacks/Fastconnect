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
      </Routes>
      <Routes>  
        <Route path='/home' element = {<Home /> }/> 
      </Routes>
      <Routes>  
        <Route path='/stalogin' element = {<Stalogin /> }/>
      </Routes>
      <Routes>  
        <Route path='/stulogin' element = {<Stulogin /> }/>
      </Routes>
      <Routes>
        <Route path='/basket' element= {<Basket />} />
      </Routes>
      <Routes>
        <Route path='/chat' element= {<Chat />} />
      </Routes>
    </Router >  
    </div>
  );
}

export default App;