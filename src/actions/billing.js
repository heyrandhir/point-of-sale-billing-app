import axios from "axios";

export const createNewBill = (cartDetails) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills', cartDetails, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const res = res.data
                if (res.hasOwnProperty('errors')) {
                    alert(res.errors)
                } else {
                    dispatch({
                        type: 'CREATE_NEW_BILL',
                        payload: cartDetails
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const getTheBill = (billId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${billId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const res = res.data
                if (res.hasOwnProperty('errors')) {
                    alert(res.errors)
                } else {
                    dispatch({
                        type: 'GET_THE_BILL',
                        payload: res
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
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const res = res.data
                if (res.hasOwnProperty('errors')) {
                    alert(res.errors)
                } else {
                    dispatch({
                        type: 'GET_ALL_BILLS',
                        payload: res
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
        axios.delte(`http://dct-billing-app.herokuapp.com/api/bills/${billId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const res = res.data
                if (res.hasOwnProperty('errors')) {
                    alert(res.errors)
                } else {
                    dispatch({
                        type: 'DELETE_THE_BILL',
                        payload: res
                    })
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
}