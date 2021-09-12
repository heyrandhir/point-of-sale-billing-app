const initialStatus = { updateStatus: false }
const productFormReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case 'PRODUCT_FORM_UPDATE_ON':
            return { ...action.payload }
        case 'PRODUCT_FORM_UPDATE_OFF':
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}
export default productFormReducer