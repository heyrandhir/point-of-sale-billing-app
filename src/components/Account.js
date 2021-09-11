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
        <div className='account-grp'>
            <h4>Your Account Details</h4>
            <p class="text-justify" style={{ width: '20rem' }}>
                <strong>username</strong> - {userInfo.username} <br />
                <strong>email </strong>- {userInfo.email} <br />
                <strong>businessName </strong>- {userInfo.businessName} <br />
                <strong>address </strong>- {userInfo.address} <br />
            </p>
        </div>
    )
}

export default Account
