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
        const redirect = () => {
            props.history.push('/account')
            toggleLogin()
        }
        // console.log(formData)
        dispatch(login(formData, redirect))

        // props.history.push('/account')
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

    const setDummyLink = () => {
        setUserEmail('aa11@gmail.com')
        setUserPw('aa11@gmail.com')
    }

    return (
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleFormSubmit} >
                        <div className="form-group">
                            {/* <label >Email</label> <br /> */}
                            <input type="email" className="form-control" value={userEmail} onChange={handleInputChange} name='userEmail' placeholder="Email" />
                        </div>
                        <div className="form-group">
                            {/* <label >Password</label> <br /> */}
                            <input type="password" className="form-control" value={userPw} onChange={handleInputChange} name='userPw' placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <a className="nav-link" href="#" onClick={setDummyLink}>Use Dummy Login</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)