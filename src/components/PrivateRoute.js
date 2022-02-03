import React from "react";
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {
    const {element: Element, ...rest} = props;

    return <Route {...rest} render={() =>{
        if (localStorage.getItem('token')) {
            return <Element />
        } else {
            return <Redirect to='/'/>
        }
    }} />
}

export default PrivateRoute;