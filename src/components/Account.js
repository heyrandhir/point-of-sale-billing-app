import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../actions/authenicate";

const Account = (props) => {

    const dispatch = useDispatch()

    const userInfo = useSelector((state) => {
        return state.authenticate
    })

    useEffect(() => {
        dispatch(getUserInfo())
    }, [])
    console.log(userInfo)
    return (
        <div>
            <h2>Your Account Details</h2>
            <h4>username - {userInfo.username}</h4>
            <h4>email - {userInfo.email}</h4>
            <h4>businessName - {userInfo.businessName}</h4>
            <h4>address - {userInfo.address}</h4>
        </div>
    )
}

export default Account
