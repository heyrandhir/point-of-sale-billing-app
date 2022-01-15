import React from "react"
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import { DateTime } from 'luxon'

const DisplayModal = (props) => {
    const { modalIsOpen, setIsOpen, currentBill } = props
    const [customers, products] = useSelector((state) => {
        return [state.customers, state.products]
    })
    const productMap = {}
    products.forEach((ele) => {
        productMap[ele._id] = [ele.name, ele.price]
    })
    const customerDetails = customers.find((ele) => {
        return ele._id === currentBill.customer
    })
    const formatDate = DateTime.fromISO(currentBill.date).toUTC().toFormat('MM/dd/yyyy')
    let sum = 0
    // console.log(currentBill)
    if (currentBill.lineItems) {
        // console.log(currentBill.lineItems)
        currentBill.lineItems.forEach(element => {
            sum += element.subTotal
        })
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <h2 >Bill Receipt</h2>
                <p>
                    Date - {formatDate} <br />
                    Name - {customerDetails.name}<br />
                    Email - {customerDetails.email}<br />
                    Mobile No. - {customerDetails.mobile}<br />
                    Items :- <br />
                    {currentBill.lineItems.map((ele, index) => <>{index + 1}) {productMap[ele.product][0]} : Rs {productMap[ele.product][1]}/- * {ele.quantity} = Rs {ele.subTotal}.<br /></>)}<br />
                    Total Paid Rs {sum}
                </p>

                <button onClick={closeModal}>close</button>

            </Modal>
        </div>
    );

}

export default DisplayModal