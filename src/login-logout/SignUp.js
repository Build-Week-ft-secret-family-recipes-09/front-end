import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className='cred-form'>
            <h1>Welcome to Secret Family Recipes</h1>
            <h2>Please create an account to continue</h2>
            {
                (error !== '') ? <p id='error'>{error}</p> : <p></p>
            }
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default SignUp;