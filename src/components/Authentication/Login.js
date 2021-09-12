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
            <div className="form-group">
                <label >Email address</label> <br />
                <input type="email" className="form-control" value={userEmail} onChange={handleInputChange} name='userEmail' /> <br />
            </div>
            <div className="form-group">
                <label >Password</label> <br />
                <input type="password" className="form-control" value={userPw} onChange={handleInputChange} name='userPw' />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default withRouter(Login)