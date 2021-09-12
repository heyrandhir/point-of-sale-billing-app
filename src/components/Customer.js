import React from "react"
import NewCustomerForm from "./NewCustomerForm"
import DisplayExistingCustomer from "./DisplayCustomer"

const Customer = (props) => {
    return (
        <div className="new-customer-container ">
            <div>
                <DisplayExistingCustomer />
            </div>
            <div className="nc-form">
                <NewCustomerForm />
            </div>
        </div>
    )
}

export default Customer