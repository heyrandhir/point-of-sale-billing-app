import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const LogOutMenuNavbar = (props) => {
    const { toggleLogin } = props

    const onLogout = () => {
        toggleLogin()
        localStorage.removeItem('token')
    }

    return (
        <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/account">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/customers">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/billing">Billing</a>
                        </li>
                        {/* <li> <Link to='/' onClick={onLogout}>Log Out</Link></li> */}
                        <li className="nav-item">
                            <a className="nav-link" onClick={onLogout} href="/">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default LogOutMenuNavbar