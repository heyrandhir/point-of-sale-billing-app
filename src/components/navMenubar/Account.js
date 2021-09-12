import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../actions/authenicate";

const Account = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(`from inside useEffect userInfo ${userInfo}`)
        dispatch(getUserInfo())
    }, [])

    const userInfo = useSelector((state) => {
        return state.authenticate
    })

    console.log(`from outside useEffect userInfo ${userInfo}`)
    return (
        <div className='account-grp'>
            <h4>Your Account Details</h4>
            <p className="text-justify" style={{ width: '20rem' }}>
                <strong>username</strong> - {userInfo.username} <br />
                <strong>email </strong>- {userInfo.email} <br />
                <strong>businessName </strong>- {userInfo.businessName} <br />
                <strong>address </strong>- {userInfo.address} <br />
            </p>
        </div>
    )
}

export default Account
