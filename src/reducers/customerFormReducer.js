const initialStatus = { updateStatus: false }
const customerFormReducer = (state = initialStatus, action) => {
    switch (action.type) {
        case 'CUSTOMER_FORM_UPDATE_ON':
            return { ...action.payload }
        case 'CUSTOMER_FORM_UPDATE_OFF':
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}
export default customerFormReducer