import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom';

import RecipeForm from './components/RecipeForm';
import Login from './login-logout/Login';
import HomePage from './homepage/HomePage';

function App() {
  return (
    <div className="App">
      <NavLink exact to ='/homepage'>
        Home
      </NavLink>
      <NavLink exact to ='/login'>
        Login
      </NavLink>
      <NavLink exact to='/recipe-form'>
        Add Recipe
      </NavLink>   
      <Routes>
        <Route exact path='/homepage' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/homepage' element={<HomePage />} />
        <Route exact path='/recipe-form' element={<RecipeForm />}/>
      </Routes>
    </div>
  );
}

export default App;
