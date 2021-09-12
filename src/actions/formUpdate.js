export const formUpdateOn = (customerData) => {
    return ((dispatch) => {
        customerData.updateStatus = true
        dispatch({
            type: 'FORM_UPDATE_ON',
            payload: customerData
        })
    })
}
export const formUpdateOff = (customerData) => {
    return ((dispatch) => {
        customerData.updateStatus = false
        dispatch({
            type: 'FORM_UPDATE_OFF',
            payload: customerData
        })
    })
}