import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCustomer } from "../../actions/customers";
import { customerFormUpdateOn } from "../../actions/customerFormUpdate";
import ReactPaginate from 'react-paginate';

const DisplayExistingCustomer = (props) => {
    const maxItemPerPage = 6
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [activePageNo, setActivePageNo] = useState(1)
    const currCustomers = useSelector((state) => {
        return state.customers
    })

    useEffect(() => {
        const start = (activePageNo - 1) * maxItemPerPage
        setItems(currCustomers.slice(start, start + maxItemPerPage))
        setPageCount(Math.ceil(currCustomers.length / maxItemPerPage))
    }, [currCustomers, activePageNo])

    const fetchCurrPageData = (currPageSelected) => {

        const arrayStartIndex = (currPageSelected - 1) * maxItemPerPage
        const arrayEndIndex = arrayStartIndex + maxItemPerPage
        const desiredArrayItems = currCustomers.slice(arrayStartIndex, arrayEndIndex)
        // console.log(desiredArrayItems)
        setItems(desiredArrayItems)
    }

    const handlePageClick = (data) => {
        const currPageSelected = data.selected + 1
        setActivePageNo(currPageSelected)
        fetchCurrPageData(currPageSelected)
    }

    return (<div>
        {items.length &&
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele) => { return <DisplayIndividualCustomer key={ele._id} customrDetail={ele} /> })}
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
            </>
        }
    </div>)
}

const DisplayIndividualCustomer = (props) => {

    const dispatch = useDispatch()
    const { customrDetail } = props
    return (
        <tr className='table-cell'>
            <td>{customrDetail.name}</td>
            <td>{customrDetail.email}</td>
            <td>{customrDetail.mobile}</td>
            <td>{<a href='#' onClick={() => { dispatch(deleteCustomer(customrDetail._id)) }} >Delete</a>}</td>
            <td>{<a href='#' onClick={() => { dispatch(customerFormUpdateOn(customrDetail)) }} >Update</a>}</td>
        </tr >)
}

export default DisplayExistingCustomer
// export default PaginatedItems