import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';


import './App.css';
import HomePage from './homepage/HomePage';
import Login from './login-logout/Login';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <div className="App"> 
      <nav> 
      <NavLink exact to ='/homepage'>
        Home
      </NavLink>
      <NavLink exact to ='/login'>
        Login
      </NavLink>
      <NavLink exact to='/recipe-form'>
        Add Recipe
      </NavLink>
      </nav>   
      <Routes>
        <Route exact path='/homepage' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='recipe-form' element={<RecipeForm />}/>
        </Routes>
    </div>
  );
}

export default App;
