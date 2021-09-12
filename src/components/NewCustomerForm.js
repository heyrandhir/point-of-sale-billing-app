import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../actions/customers";

const NewCustomerForm = () => {
    const [customerName, setCustomerName] = useState('')
    const [email, setCustomerEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')

    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const customerData = {
            email: email,
            name: customerName,
            mobile: mobileNo
        }
        dispatch(createCustomer(customerData))
        setCustomerName('')
        setCustomerEmail('')
        setMobileNo('')
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'customerName':
                setCustomerName(e.target.value)
                break
            case 'email':
                setCustomerEmail(e.target.value)
                break
            case 'mobileNo':
                setMobileNo(e.target.value)
                break
            default:
                break
        }
    }
    return (
        <form onSubmit={handleFormSubmit} >
            <h2>Add new Customers</h2>
            <div className="form-group">
                <label >Name</label> <br />
                <input type="text" className="form-control" value={customerName} onChange={handleInputChange} name='customerName' />
            </div>
            <div className="form-group">
                <label >Email address</label> <br />
                <input type="email" className="form-control" value={email} onChange={handleInputChange} name='email' /> <br />
            </div>
            <div className="form-group">
                <label >Mobile</label> <br />
                <input type="text" className="form-control" value={mobileNo} onChange={handleInputChange} name='mobileNo' />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default NewCustomerForm