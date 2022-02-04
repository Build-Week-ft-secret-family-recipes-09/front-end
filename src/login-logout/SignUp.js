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

    input {
        margin: 1%;
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
        margin-top: 8%;
    }
    `

const SignUp = () => {
    const navigate = useNavigate();
    const initialValues = {
        username: '',
        password: '',
        email: ''
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setError('')
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        navigate('/login')
        // axios.post('https://bldwk-scrt-rec-api.herokuapp.com/', formValues)
        //     .then(resp => {
        //         console.log(resp)
        //         //set local storage
        //         navigate('/login')
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
    }

    return(
        <UserStyles>
        <div className='cred-form'>
            <h1>Welcome to Secret Family Recipes</h1>
            <h2>Please create an account to continue</h2>
            {
                (error !== '') ? <p id='error'>{error}</p> : <p></p>
            }
            <div className='user-form'>
            <form onSubmit={handleSubmit}>
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
                <label>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleChange}
                />
                <button>Create Account</button>
                </div>
            </form>
            </div>
        </div>
        </UserStyles>
    )
}

export default SignUp;