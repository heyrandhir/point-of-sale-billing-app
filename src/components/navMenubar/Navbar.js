import React from 'react'
import LoginMenuNavbar from './LoginMenuNavbar'
import LogOutMenuNavbar from './LogOutMenuNavbar'

const Navbar = (props) => {
    const { toggleLogin, isLoggedin } = props
    return (
        <div>
            {isLoggedin ? (<LogOutMenuNavbar toggleLogin={toggleLogin} />) : (<LoginMenuNavbar toggleLogin={toggleLogin} />)}
        </div>)
}

export default Navbar