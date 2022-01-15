import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authenicate";
import { withRouter } from "react-router";

const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userBusinessName, setBusinessName] = useState('')
    const [userAddress, setAdress] = useState('')
    const { history } = props
    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: userName,
            email: userEmail,
            password: userPw,
            businessName: userBusinessName,
            address: userAddress
        }
        // console.log(formData)
        dispatch(register(formData))
        history.push('/login')
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'userName':
                setUserName(e.target.value)
                break
            case 'userEmail':
                setUserEmail(e.target.value)
                break
            case 'userPw':
                setUserPw(e.target.value)
                break
            case 'userBusinessName':
                setBusinessName(e.target.value)
                break
            case 'userAddress':
                setAdress(e.target.value)
                break
            default:
                break
        }
    }
    return (
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <form onSubmit={handleFormSubmit} >
                        <div className="form-group col-lg-12">
                            <input type="text" className="form-control" value={userName} onChange={handleInputChange} name='userName' placeholder="Name" />
                        </div>
                        <div className="form-group col-lg-12">
                            <input type="email" className="form-control" value={userEmail} onChange={handleInputChange} name='userEmail' placeholder="Email" />
                        </div>
                        <div className="form-group col-lg-12">
                            <input type="password" className="form-control" value={userPw} onChange={handleInputChange} name='userPw' placeholder="Password" />
                        </div>
                        <div className="form-group col-lg-12">
                            <input type="text" className="form-control" value={userBusinessName} onChange={handleInputChange} name='userBusinessName' placeholder="Store Name" />
                        </div>
                        <div className="form-group col-lg-12">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" value={userAddress} onChange={handleInputChange} name='userAddress' placeholder="Address"></textarea>
                        </div>
                        <div className="form-group ">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
export default withRouter(Register)