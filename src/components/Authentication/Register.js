import React, { useState, useEffect } from "react";
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
        <div>
            <form onSubmit={handleFormSubmit} >
                <label>Name</label>
                <input type='text' value={userName} onChange={handleInputChange} name='userName'></input> <br />
                <label>Email</label>
                <input type='text' value={userEmail} onChange={handleInputChange} name='userEmail'></input> <br />
                <label>Password</label>
                <input type='text' value={userPw} onChange={handleInputChange} name='userPw'></input> <br />
                <label>Business Name</label>
                <input type='text' value={userBusinessName} onChange={handleInputChange} name='userBusinessName'></input> <br />
                <label>Business Address</label>
                <textarea value={userAddress} onChange={handleInputChange} name='userAddress'></textarea> <br />
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default withRouter(Register)