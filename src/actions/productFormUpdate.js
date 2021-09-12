export const productFormUpdateOn = (productData) => {
    return ((dispatch) => {
        productData.updateStatus = true
        dispatch({
            type: 'PRODUCT_FORM_UPDATE_ON',
            payload: productData
        })
    })
}
export const productFormUpdateOff = (productData) => {
    return ((dispatch) => {
        productData.updateStatus = false
        dispatch({
            type: 'PRODUCT_FORM_UPDATE_OFF',
            payload: productData
        })
    })
}