import axios from "axios"

export const register = (userData) => {
    // console.log(userData)
    return (dispatch) => (
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', userData)
            .then((res) => {
                const result = res.data
                console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.message)
                } else {
                    dispatch({
                        type: 'REGISTER',
                        payload: result
                    })
                }
            }) //success
            .catch((err) => {
                alert(err.message)
            }) // error
    )
}

export const login = (userCredentials, redirect) => {
    // console.log(`userCredentials are ${userCredentials}`)
    return () => (
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login', userCredentials)
            .then((res) => {
                const result = res.data
                // console.log('result')
                // console.log(result)
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    localStorage.setItem('token', result.token)
                    redirect()
                    // console.log(`localStorage.getItem('token') - ${localStorage.getItem('token')}`)
                }
            }) //success
            .catch((err) => {
                alert(err.message)
            }) // error
    )
}

export const getUserInfo = () => {
    const jwtKey = localStorage.getItem('token')
    return (dispatch) => (
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account', { headers: { Authorization: `Bearer ${jwtKey}` } })
            .then((res) => {
                const result = res.data
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    dispatch({
                        type: 'GET_USER_INFO',
                        payload: result
                    })
                }
            }) //success
            .catch((err) => {
                alert(err.message)
            }) // error
    )
}