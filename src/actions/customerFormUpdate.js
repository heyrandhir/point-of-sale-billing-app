export const customerFormUpdateOn = (customerData) => {
    return ((dispatch) => {
        customerData.updateStatus = true
        dispatch({
            type: 'CUSTOMER_FORM_UPDATE_ON',
            payload: customerData
        })
    })
}
export const customerFormUpdateOff = (customerData) => {
    return ((dispatch) => {
        customerData.updateStatus = false
        dispatch({
            type: 'CUSTOMER_FORM_UPDATE_OFF',
            payload: customerData
        })
    })
}