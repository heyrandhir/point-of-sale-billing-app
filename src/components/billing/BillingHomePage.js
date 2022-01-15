import React, { useState } from "react";
import CreateBill from "./CreateBill";
import DisplayBills from "./DisplayBills";

const BillingHomePage = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const [currentBill, setCurrentBill] = useState({})

    return (<div className='d-flex'>
        <div className='col-4 p-2 m-4'>
            <h3>All Bills </h3>
            <DisplayBills setIsOpen={setIsOpen} setCurrentBill={setCurrentBill} />
        </div>
        <div className='col-8 p-2 m-4'>
            <CreateBill modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} currentBill={currentBill} setCurrentBill={setCurrentBill} />
        </div>
    </div>)
}

export default BillingHomePage