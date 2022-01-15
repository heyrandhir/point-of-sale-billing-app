import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayModal from "./DisplayModal";
import { createNewBill } from "../../actions/billing";

const CreateBill = (props) => {

    const [shoppingDate, setShoppingDate] = useState('')
    const [customerSel, setCustomerSel] = useState('')
    const [productSel, setProductSel] = useState('')
    const [lstCartItems, setLstCartItems] = useState([])
    const [mapProdId, setMapProdId] = useState({})

    const { modalIsOpen, setIsOpen, currentBill, setCurrentBill } = props

    const [allCustomers, allProducts] = useSelector((state) => {
        return [state.customers, state.products]
    })

    useEffect(() => {
        const dicProdId = {}
        allProducts.forEach((element) => {
            dicProdId[element._id] = [element.name, element.price]
        })
        setMapProdId(dicProdId)
    }, [allProducts])

    const dispatch = useDispatch()

    const handleCustomerDropdown = (e) => {
        setCustomerSel(e.target.value)
    }

    const handleProductDropdown = (e) => {
        setProductSel(e.target.value)
    }

    const handleDateChange = (e) => {
        setShoppingDate(e.target.value)
    }

    const checkMandatoryInfoFilled = () => {
        if (shoppingDate === '') {
            alert('select the date !')
            return 0
        }
        if (customerSel === '') {
            alert('select the customer !')
            return 0
        }
        if (productSel === '') {
            alert('select the product !')
            return 0
        }
        return 1
    }
    const addItemsToCart = () => {
        if (!checkMandatoryInfoFilled()) {
            return
        }
        if (productSel) {
            const foundItem = lstCartItems.find((ele) => { return ele.product === productSel })
            if (foundItem) {
                modifyQuantity(productSel, 1)
            } else {
                setLstCartItems([...lstCartItems, { product: productSel, quantity: 1 }])
            }
        }
    }

    const modifyQuantity = (ele, modifyUnit) => {
        setLstCartItems(lstCartItems.map((item) => {
            if (item.product === ele) {
                return { product: ele, quantity: item.quantity + modifyUnit }
            }
            return item
        }))
    }

    const deleteItemFromCart = (ele) => {
        setLstCartItems(lstCartItems.filter((item) => { return item.product !== ele }))
    }

    const getCartTotal = () => {
        let finalSum = 0
        lstCartItems.forEach((ele) => {
            finalSum += mapProdId[ele.product][1] * ele.quantity
        })
        return finalSum
    }

    const genrateBill = () => {
        if (!checkMandatoryInfoFilled()) {
            return
        }
        const cartData = {
            date: shoppingDate,
            customer: customerSel,
            lineItems: lstCartItems
        }
        dispatch(createNewBill(cartData, setCurrentBill, setIsOpen))
        setLstCartItems([])
        setShoppingDate('')
        setCustomerSel('')
        setProductSel('')
    }
    return (
        <div style={{ display: 'flex' }}>
            <div className="p-2 m-2 bg-light border col-3 ">
                <h2>Create Bill</h2>
                <label >Purchase date</label>
                <input className="m-1 p-1" type="date" id="shopping-date" name="date" value={shoppingDate} onChange={handleDateChange} ></input> <br />
                <label >Customer</label><br />
                <select className="m-1 p-1" value={customerSel} onChange={handleCustomerDropdown}>
                    <option value={undefined}>Select</option>
                    {allCustomers.map((customer) => { return <option key={customer._id} value={customer._id}>{customer.name}</option> })}
                </select> <br />
                <label >Product</label><br />
                <select className="m-1 p-1" value={productSel} onChange={handleProductDropdown}>
                    <option value={undefined}>Select</option>
                    {allProducts.map((product) => { return <option key={product._id} value={product._id}>{product.name}</option> })}
                </select>
                <button type="submit" className="btn btn-success me-md-2 p-2 m-2" onClick={addItemsToCart}>Add to Cart</button>

            </div>
            {lstCartItems.length > 0 && <div className="p-2 m-2 bg-light border col-6 ">
                <h2>Cart Items</h2>
                {lstCartItems.map((ele) => {
                    return (<div key={ele.product}>
                        <span className="cart-item-name">{mapProdId[ele.product][0]}</span>
                        <span className="cart-item-mrp" style={{ display: 'inline-block' }}>{mapProdId[ele.product][1]}/-</span>
                        <button className="m-1"
                            onClick={() => { modifyQuantity(ele.product, -1) }}
                            disabled={ele.quantity === 1}
                        >-</button>
                        <span className="m-1">{ele.quantity}</span>
                        <button className=" m-1" onClick={() => { modifyQuantity(ele.product, 1) }}>+</button>
                        <button className=" m-1 btn-danger" onClick={() => { deleteItemFromCart(ele.product) }}>Delete</button>
                        <span> Rs {mapProdId[ele.product][1] * ele.quantity}</span>
                    </div>)
                })}
                <hr />
                <span><strong> Total - Rs {getCartTotal()}</strong></span>
                <button className="p-2 m-2 btn-success " onClick={() => genrateBill()}>Generate</button>
            </div>}
            {modalIsOpen && <DisplayModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} currentBill={currentBill} />}
        </div>
    );
}

export default CreateBill