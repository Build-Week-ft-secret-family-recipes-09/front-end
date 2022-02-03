import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        navigate('/homepage')
        // axios.post('https://bldwk-scrt-rec-api.herokuapp.com/api/auth/login', creds)
        //     .then(resp => {
        //         console.log(resp)
        //         setError('')
        //         //set local storage
        //         navigate('/homepage')
        //     })
        //     .catch(err => {
        //         setError('Invalid username/password combination')
        //         console.error(err)
        //     })
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    return(
        <div className='cred-form'>
            <h1>Welcome to Secret Family Recipes</h1>
            <h2>Please enter your account information</h2>
            {
                (error !== '') ? <p id='error'>{error}</p> : <p></p>
            }
            <form onSubmit={handleSubmit} >
                <label>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
            <p>Don't have an account yet?</p>
            <button onClick={handleSignUp}>Sign Up Now</button>
        </div>
    )
}


export default Login;