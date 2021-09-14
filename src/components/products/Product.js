import React from "react"
import NewProductForm from "./NewProductForm"
import DisplayExistingProduct from "./DisplayProduct"

const Product = (props) => {
    return (
        <div className="new-customer-container ">
            <div className='col-8 p-2 m-2'>
                <DisplayExistingProduct />
            </div>
            <div className="col-4 p-2 m-2">
                <NewProductForm />
            </div>
        </div>
    )
}

export default Product