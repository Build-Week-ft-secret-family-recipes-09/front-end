import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const UserStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;

    h1, h2, p {
        color: rgb(0, 0, 0);
        margin-left: 20px;
        font-weight: bold;
        font-family: fantasy, Verdana, Geneva, Tahoma, sans-serif
    }

    h1 {
        font-size: 3rem;
    }

    .user-form {
        display: flex;
        justify-content: center;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        width: 30%;
        justify-content: center;
    }

    .login-form input {
        margin: 1%;
    }

    .login-form button {
        margin: 1%;
        margin-top: 3%;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    button {
        width: 100px;
        align-self: center;
        padding: 1%;
        background-color: #bbc9e4;
        border: 1px solid black;
    }
    `

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
        <UserStyles>
        <div className='cred-form'>
            <h1>Welcome to Secret Family Recipes</h1>
            <h2>Please enter your account information</h2>
            {
                (error !== '') ? <p id='error'>{error}</p> : <p></p>
            }
            <div className='user-form'>
            <form className='login-form' onSubmit={handleSubmit} >
                <div className='user-info'>
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
                </div>
            </form>
            </div>
            <p>Don't have an account yet?</p>
            <button onClick={handleSignUp}>Sign Up Now</button>
        </div>
        </UserStyles>
    )
}


export default Login;