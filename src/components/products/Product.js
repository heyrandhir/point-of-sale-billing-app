import React from "react"
import NewProductForm from "./NewProductForm"
import DisplayExistingProduct from "./DisplayProduct"

const Product = (props) => {
    return (
        <div className="new-customer-container ">
            <div>
                <DisplayExistingProduct />
            </div>
            <div className="nc-form">
                <NewProductForm />
            </div>
        </div>
    )
}

export default Product