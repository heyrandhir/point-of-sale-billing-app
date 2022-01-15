import axios from "axios";

export const createNewBill = (cartData, setCurrentBill, setIsOpen) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.post('https://dct-billing-app.herokuapp.com/api/bills', cartData, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    dispatch({
                        type: 'CREATE_NEW_BILL',
                        payload: result
                    })
                    setCurrentBill(result)
                    setIsOpen(true)
                }
            })
            .catch((err) => {
                // console.log(123)
                alert(err)
            })
    }
}

export const getTheBill = (billId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.get(`https://dct-billing-app.herokuapp.com/api/bills/${billId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    dispatch({
                        type: 'GET_THE_BILL',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const getAllBills = () => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.get(`https://dct-billing-app.herokuapp.com/api/bills`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    dispatch({
                        type: 'GET_ALL_BILLS',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const deleteTheBill = (billId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.delete(`https://dct-billing-app.herokuapp.com/api/bills/${billId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    dispatch({
                        type: 'DELETE_THE_BILL',
                        payload: result._id
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
}