import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTheBill } from "../../actions/billing";
import { DateTime } from 'luxon'
import ReactPaginate from "react-paginate";

const DisplayBills = (props) => {
    const maxItemPerPage = 6
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [activePageNo, setActivePageNo] = useState(1)
    const { setIsOpen, setCurrentBill } = props

    const allBills = useSelector((state) => {
        return state.bills
    })
    const allCustomers = useSelector((state) => {
        return state.customers
    })
    useEffect(() => {
        const start = (activePageNo - 1) * maxItemPerPage
        setItems(allBills.slice(start, start + maxItemPerPage))
        setPageCount(Math.ceil(allBills.length / maxItemPerPage))
    }, [allBills, activePageNo])
    const fetchCurrPageData = (currPageSelected) => {

        const arrayStartIndex = (currPageSelected - 1) * maxItemPerPage
        const arrayEndIndex = arrayStartIndex + maxItemPerPage
        const desiredArrayItems = allBills.slice(arrayStartIndex, arrayEndIndex)
        setItems(desiredArrayItems)
    }

    const handlePageClick = (data) => {
        const currPageSelected = data.selected + 1
        setActivePageNo(currPageSelected)
        fetchCurrPageData(currPageSelected)
    }

    return (
        <>
            {items.length > 0 &&
                <>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">Total (Rs) </th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((ele, index) => {
                                const currIndex = ((activePageNo - 1) * maxItemPerPage) + index + 1
                                return <DisplayIndividualBill key={ele._id} billDetail={ele} allCustomers={allCustomers} index={currIndex} setIsOpen={setIsOpen} setCurrentBill={setCurrentBill} />
                            })}
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
                        containerClassName={"pagination justify-content-left m-2 p-2"}
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
        </>
    )
}

const DisplayIndividualBill = (props) => {
    const format = 'MM/dd/yyyy'

    const dispatch = useDispatch()
    const { billDetail, allCustomers, index, modalIsOpen, setIsOpen, currentBill, setCurrentBill } = props
    const billDate = (DateTime.fromISO(billDetail.date).toUTC().toFormat(format));


    let totalVal = 0
    billDetail.lineItems.forEach(element => {
        totalVal += element.subTotal
    });
    const currCustomer = allCustomers.find((ele) => { return ele._id === billDetail.customer })
    const viewTheBill = () => {
        setCurrentBill(billDetail)
        setIsOpen(true)
    }
    return (
        <>
            {currCustomer &&

                <tr className='table-cell'>
                    <td>{index}</td>
                    <td>{billDate}</td>
                    <td>{currCustomer.name}</td>
                    <td>{totalVal}</td>
                    <td>{<a href='#' onClick={() => { viewTheBill() }} >View</a>}</td>
                    <td>{<a href='#' onClick={() => { dispatch(deleteTheBill(billDetail._id)) }} >Delete</a>}</td>
                </tr >
            }
        </>
    )
}

export default DisplayBills