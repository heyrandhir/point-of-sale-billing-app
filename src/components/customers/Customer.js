import React from "react"
import NewCustomerForm from "./NewCustomerForm"
import DisplayExistingCustomer from "./DisplayCustomer"

const Customer = (props) => {
    return (
        <div className="new-customer-container ">
            <div className='col-8 p-2 m-2'>
                <DisplayExistingCustomer />
            </div>
            <div className="col-4 p-2 m-2">
                <NewCustomerForm />
            </div>
        </div>
    )
}

export default Customer