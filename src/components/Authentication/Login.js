import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../actions/authenicate"
import { withRouter } from "react-router"

const Login = (props) => {
    const { toggleLogin } = props
    const [userEmail, setUserEmail] = useState('')
    const [userPw, setUserPw] = useState('')
    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: userEmail,
            password: userPw
        }
        // console.log(formData)
        dispatch(login(formData))
        toggleLogin()
        props.history.push('/account')
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'userEmail':
                setUserEmail(e.target.value)
                break
            case 'userPw':
                setUserPw(e.target.value)
                break
            default:
                break
        }
    }

    return (
        <form onSubmit={handleFormSubmit} >
            <label>Email</label>
            <input type='text' value={userEmail} onChange={handleInputChange} name='userEmail'></input> <br />
            <label>Password</label>
            <input type='text' value={userPw} onChange={handleInputChange} name='userPw'></input> <br />
            <input type='submit'></input>
        </form>
    )
}

export default withRouter(Login)