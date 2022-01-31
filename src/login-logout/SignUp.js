import React, { useState } from 'react';

const SignUp = () => {
    const { push } = 'useHistory'
    const initialValues = {
        username: '',
        password: '',
        email: '',
        phone: ''
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
        console.log('Submit')
        //axios post call to /register, formValues
        //set local storage
        //push login page
        //set error
        //console.log error
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
                <label>Phone Number</label>
                <input
                    type='number'
                    id='phone'
                    name='phone'
                    onChange={handleChange}
                />
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;