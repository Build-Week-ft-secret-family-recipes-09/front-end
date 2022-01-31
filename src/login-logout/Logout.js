import React, { useEffect } from 'react';

const Logout = () => {
    const { push } = 'useHistory'
    useEffect(() => {
        console.log('logout')
        //axios post call to /logout, {}
        //remove local storage item
        //push login
        //console.log error
    }, [])
    return(
        <div></div>
    )
}

export default Logout;