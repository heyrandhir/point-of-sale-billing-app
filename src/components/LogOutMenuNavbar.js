import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const LogOutMenuNavbar = (props) => {
    const { toggleLogin } = props

    const onLogout = () => {
        toggleLogin()
        localStorage.removeItem('token')
    }

    return (
        <div>
            <ul>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/account'>Account</Link></li>
                <li>Customers</li>
                <li>Products</li>
                <li>Billing</li>
                <li> <Link to='/' onClick={onLogout}>Log Out</Link></li>
            </ul>
        </div>
    )
}

export default LogOutMenuNavbar