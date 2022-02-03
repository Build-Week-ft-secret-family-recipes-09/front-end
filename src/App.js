import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

import './App.css';

import RecipeForm from './components/RecipeForm';
import Login from './login-logout/Login';
import HomePage from './homepage/HomePage';
import SignUp from './login-logout/SignUp';

function App() {
  return (

    <div className="App"> 

      <NavLink to ='/login'>
        Login
      </NavLink>
      <NavLink to ='/homepage'>
        Home
      </NavLink>
      <NavLink to='/recipe-form'>
        Add Recipe
      </NavLink>   
    
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/recipe-form' element={<RecipeForm />}/>
      </Routes>
    </div>
  );
}

export default App;
