import axios from "axios";

export const getCustomers = () => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.get('https://dct-billing-app.herokuapp.com/api/customers', { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'GET_CUSTOMERS',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const createCustomer = (cutomerData) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.post('https://dct-billing-app.herokuapp.com/api/customers', cutomerData, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                // console.log(`result is ${result}`)
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'NEW_CUSTOMER',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const deleteCustomer = (customerId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${customerId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'DELETE_CUSTOMER',
                        payload: result._id
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const updateCustomer = (customerData, customerId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.put(`https://dct-billing-app.herokuapp.com/api/customers/${customerId}`, customerData, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'UPDATE_CUSTOMER',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
