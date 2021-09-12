import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer, updateCustomer } from "../../actions/customers";
import { customerFormUpdateOff } from "../../actions/customerFormUpdate";

const NewCustomerForm = (props) => {
    const [customerName, setCustomerName] = useState('')
    const [email, setCustomerEmail] = useState('')
    const [mobileNo, setMobileNo] = useState('')

    const dispatch = useDispatch()
    const updateFromFlag = useSelector((state) => {
        return state.customerForms.updateStatus
    })
    const updateFromDetails = useSelector((state) => {
        return state.customerForms
    })
    useEffect(() => {
        prefillInputFields()
    }, [updateFromDetails])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const customerData = {
            name: customerName,
            email: email,
            mobile: mobileNo
        }
        if (updateFromFlag) {
            dispatch(updateCustomer(customerData, updateFromDetails._id))
        } else {
            dispatch(createCustomer(customerData))
        }
        resetFormEntryFields()
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

    const prefillInputFields = () => {
        if (updateFromFlag) {
            setCustomerName(updateFromDetails.name)
            setCustomerEmail(updateFromDetails.email)
            setMobileNo(updateFromDetails.mobile)
        }
    }

    const resetFormEntryFields = () => {
        setCustomerName('')
        setCustomerEmail('')
        setMobileNo('')
        if (updateFromFlag) {
            dispatch(customerFormUpdateOff({}))
        }
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                {updateFromFlag ? <h2>Update Customer Details </h2> : <h2>Add a new Customer</h2>}
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
            {updateFromFlag && <button onClick={resetFormEntryFields} value='cancel' className="btn btn-danger">Cancel</button>}
        </div>
    )
}

export default NewCustomerForm