import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../actions/products";
import { productFormUpdateOff } from "../../actions/productFormUpdate";

const NewProductForm = (props) => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()
    const updateFromFlag = useSelector((state) => {
        return state.productForms.updateStatus
    })
    const updateFromDetails = useSelector((state) => {
        return state.productForms
    })
    useEffect(() => {
        prefillInputFields()
    }, [updateFromDetails])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const productData = {
            name: productName,
            price: price,
        }
        if (updateFromFlag) {
            dispatch(updateProduct(productData, updateFromDetails._id))
        } else {
            dispatch(createProduct(productData))
        }
        resetFormEntryFields()
    }

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'productName':
                setProductName(e.target.value)
                break
            case 'price':
                setPrice(e.target.value)
                break
            default:
                break
        }
    }

    const prefillInputFields = () => {
        if (updateFromFlag) {
            setProductName(updateFromDetails.name)
            setPrice(updateFromDetails.price)
        }
    }

    const resetFormEntryFields = () => {
        setProductName('')
        setPrice('')
        if (updateFromFlag) {
            dispatch(productFormUpdateOff({}))
        }
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                {updateFromFlag ? <h2>Update Product Details </h2> : <h2>Add a new Product</h2>}
                <div className="form-group">
                    <label >Name</label> <br />
                    <input type="text" className="form-control" value={productName} onChange={handleInputChange} name='productName' />
                </div>
                <div className="form-group">
                    <label >price </label> <br />
                    <input type="text" className="form-control" value={price} onChange={handleInputChange} name='price' /> <br />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            {updateFromFlag && <button onClick={resetFormEntryFields} value='cancel' className="btn btn-danger">Cancel</button>}
        </div>
    )
}

export default NewProductForm