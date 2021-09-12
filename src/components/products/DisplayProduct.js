import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../../actions/products";
import { productFormUpdateOn } from "../../actions/productFormUpdate";

const DisplayExistingProduct = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const currProducts = useSelector((state) => {
        return state.products
    })
    return (<div>
        {currProducts.length > 0 && <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {currProducts.map((ele) => { return <DisplayIndividualProduct key={ele._id} productDetail={ele} /> })}
            </tbody>
        </table>}
    </div>)
}

const DisplayIndividualProduct = (props) => {

    const dispatch = useDispatch()
    const { productDetail } = props
    return (
        <tr className='table-cell'>
            <td>{productDetail.name}</td>
            <td>{productDetail.price}</td>
            <td>{<a href='#' onClick={() => { dispatch(deleteProduct(productDetail._id)) }} >Delete</a>}</td>
            <td>{<a href='#' onClick={() => { dispatch(productFormUpdateOn(productDetail)) }} >Update</a>}</td>
        </tr >)
}


export default DisplayExistingProduct