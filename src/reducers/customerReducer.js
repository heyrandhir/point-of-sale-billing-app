const initialState = []

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CUSTOMERS':
            return ([...action.payload])
        case 'NEW_CUSTOMER':
            return ([...state, action.payload])
        case 'DELETE_CUSTOMER':
            return ([...state].filter((customer) => {
                return customer._id !== action.payload
            }))
        case 'UPDATE_CUSTOMER':
            const filteredLst = ([...state].filter((customer) => {
                return customer._id !== action.payload._id
            }))
            filteredLst.push(action.payload)
            return (filteredLst)
        default:
            return ([...state])
    }
}

export default customerReducer