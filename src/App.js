import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import './App.css';

import RecipeForm from './components/RecipeForm';
import Login from './login-logout/Login';
import HomePage from './homepage/HomePage';
import SignUp from './login-logout/SignUp';
import Logout from './login-logout/Logout';

function App() {
  return (

    <div className="App"> 
      <header >
        <div className='title'>Secret Family Recipes</div>
        <div className="navContainer">     
          <NavLink className="link" to ='/login'>
            Login
          </NavLink>
          <NavLink className="link" to ='/homepage'>
            Home
          </NavLink>
          <NavLink className="link" to='/recipe-form'>
            Add Recipe
          </NavLink>
          <NavLink className="link" to='/logout'>
            Logout
          </NavLink>
        </div>

        
      </header>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/homepage' element={<HomePage className="homePage"/>} />
        <Route exact path='/recipe-form' element={<RecipeForm />} />
        <Route exact path='/logout' element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
