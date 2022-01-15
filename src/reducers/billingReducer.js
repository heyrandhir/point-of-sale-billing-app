const initialState = []

const billingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_BILL': {
            return [...state, action.payload]
        }
        case 'GET_ALL_BILLS': {
            return action.payload
        }
        case 'DELETE_THE_BILL': {
            return ([...state].filter((billObj) => {
                return billObj._id !== action.payload
            }))
        }
        default: {
            return [...state]
        }
    }
}

export default billingReducer