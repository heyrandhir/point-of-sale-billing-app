import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../actions/products";
import { productFormUpdateOn } from "../../actions/productFormUpdate";
import ReactPaginate from 'react-paginate';

const DisplayExistingProduct = (props) => {
    const maxItemPerPage = 6
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [activePageNo, setActivePageNo] = useState(1)
    const currProducts = useSelector((state) => {
        return state.products
    })

    useEffect(() => {
        const start = (activePageNo - 1) * maxItemPerPage
        setItems(currProducts.slice(start, start + maxItemPerPage))
        setPageCount(Math.ceil(currProducts.length / maxItemPerPage))
    }, [currProducts, activePageNo])

    const fetchCurrPageData = (currPageSelected) => {

        const arrayStartIndex = (currPageSelected - 1) * maxItemPerPage
        const arrayEndIndex = arrayStartIndex + maxItemPerPage
        const desiredArrayItems = currProducts.slice(arrayStartIndex, arrayEndIndex)
        // console.log(desiredArrayItems)
        setItems(desiredArrayItems)
    }

    const handlePageClick = (data) => {
        const currPageSelected = data.selected + 1
        setActivePageNo(currPageSelected)
        fetchCurrPageData(currPageSelected)
    }

    return (<div>
        {currProducts.length > 0 &&
            <>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele) => { return <DisplayIndividualProduct key={ele._id} productDetail={ele} /> })}
                    </tbody>
                </table>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </>}
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