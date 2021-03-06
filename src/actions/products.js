import axios from "axios";

export const getProducts = () => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.get('https://dct-billing-app.herokuapp.com/api/products', { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'GET_PRODUCTS',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const createProduct = (productData) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.post('https://dct-billing-app.herokuapp.com/api/products', productData, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                // console.log(`result is ${result}`)
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'NEW_PRODUCT',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const deleteProduct = (productId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${productId}`, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'DELETE_PRODUCT',
                        payload: result._id
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const updateProduct = (productData, productId) => {
    const jwtTok = localStorage.getItem('token')
    return (dispatch) => {
        axios.put(`https://dct-billing-app.herokuapp.com/api/products/${productId}`, productData, { headers: { Authorization: `Bearer ${jwtTok}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.error)
                } else {
                    dispatch({
                        type: 'UPDATE_PRODUCT',
                        payload: result
                    })
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}
