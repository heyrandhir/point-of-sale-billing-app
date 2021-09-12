import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers, deleteCustomer } from "../actions/customers";

const DisplayExistingCustomer = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCustomers())
    }, [])
    const currCustomers = useSelector((state) => {
        return state.customers
    })
    return (<div>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {currCustomers.map((ele) => { return <DisplayIndividualCustomer key={ele._id} customrDetail={ele} /> })}
            </tbody>
        </table>
    </div>)
}

const updateCustomer = () => {
}

const DisplayIndividualCustomer = (props) => {
    const dispatch = useDispatch()
    const { customrDetail } = props
    return (
        <tr className='table-cell'>
            <td>{customrDetail.name}</td>
            <td>{customrDetail.email}</td>
            <td>{customrDetail.mobile}</td>
            <td>{<a href='#' onClick={() => { dispatch(deleteCustomer(customrDetail._id)) }} >Delete</a>}</td>
            <td>{<a href='#' onClick={() => { updateCustomer(customrDetail._id) }} >Update</a>}</td>
        </tr >)
}


export default DisplayExistingCustomer