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

    // console.log(`from outside useEffect userInfo ${userInfo}`)
    return (
        <div class="container mt-5 mb-5 d-flex justify-content-center">
            <div class="card px-1 py-4">
                <div class="card-body">
                    <h4>Your Account Details</h4>
                    <p className="text-justify" style={{ width: '20rem' }}>
                        <strong>username</strong> - {userInfo.username} <br />
                        <strong>email </strong>- {userInfo.email} <br />
                        <strong>businessName </strong>- {userInfo.businessName} <br />
                        <strong>address </strong>- {userInfo.address} <br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Account
