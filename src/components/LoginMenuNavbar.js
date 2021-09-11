import React from "react";
import { Link, Route, Switch } from 'react-router-dom'

const LoginMenuNavbar = (props) => {
    return (
        <div>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/support'>Support</Link></li>
            </ul>
        </div>
    )
}

export default LoginMenuNavbar