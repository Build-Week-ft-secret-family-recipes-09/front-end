import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('logout')
        navigate('/login')
        // axios.post('https://bldwk-scrt-rec-api.herokuapp.com/api/auth/logout', {})
        //     .then(resp => {
        //         console.log(resp)
        //         //remove local storage item token
        //         navigate('/login')
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
    }, [])

    return(
        <div></div>
    )
}

export default Logout;