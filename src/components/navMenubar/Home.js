import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import Login from '../authentication/Login'
import Register from '../authentication/Register'
import Account from './Account'
import AboutUs from './AboutUs'
import Support from './Support'
import Customer from '../customers/Customer'
import Product from '../products/Product'

const Home = (props) => {

    const [isLoggedin, setIsLoggedin] = useState(false)

    const toggleLogin = () => {
        setIsLoggedin(!(isLoggedin))
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLoggedin(true)
        }
    }, [])

    return (
        <div>
            <Navbar toggleLogin={toggleLogin} isLoggedin={isLoggedin} />
            <Switch>
                <Route path='/login'><Login toggleLogin={toggleLogin} /></Route>
                <Route path='/register'><Register /></Route>
                <Route path='/account'><Account /></Route>
                <Route path='/about'><AboutUs /></Route>
                <Route path='/support'><Support /></Route>
                <Route path='/customers'><Customer /></Route>
                <Route path='/products'><Product /></Route>
            </Switch>
        </div>
    )
}

export default Home