import React, { useState } from 'react';

const Login = () => {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('')
    const { push } = 'useHistory'

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
        //axios post call to /login, creds
        //set local storage
        //push to home page
        //set error
        //console.log error
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
        </div>
    )
}

export default Login;