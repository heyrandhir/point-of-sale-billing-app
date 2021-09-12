const initialState = {}

const authenticateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return { ...state, ...action.payload }
        case 'GET_USER_INFO':
            return { ...state, ...action.payload }
        default:
            return { ...state }
    }
}

export default authenticateReducer