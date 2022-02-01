import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';


import './App.css';
import HomePage from './homepage/HomePage';
import Login from './login-logout/Login';

function App() {
  return (
    <div className="App"> 
      <nav> 
      {/* <NavLink exact to ='/homepage'>
        Home
      </NavLink>
      <NavLink exact to ='/login'>
        Login
      </NavLink>
      <NavLink exact to='/recipe-form'>
        Add Recipe
      </NavLink> */}
      </nav>   
      <Routes>
        <Route exact path='/homepage' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/homepage' component={HomePage} />
        </Routes>
    </div>
  );
}

export default App;
