const initialState = []

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return ([...action.payload])
        case 'NEW_PRODUCT':
            return ([...state, action.payload])
        case 'DELETE_PRODUCT':
            return ([...state].filter((PRODUCT) => {
                return PRODUCT._id !== action.payload
            }))
        case 'UPDATE_PRODUCT':
            const indxOfUpdatedItem = [...state].findIndex(p => p._id === action.payload._id);
            const filteredLst = ([...state].filter((PRODUCT) => {
                return PRODUCT._id !== action.payload._id
            }))
            // filteredLst.push(action.payload)
            filteredLst.splice(indxOfUpdatedItem, 0, action.payload)
            return (filteredLst)
        default:
            return ([...state])
    }
}

export default productReducer