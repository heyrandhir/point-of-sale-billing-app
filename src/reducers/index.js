import { combineReducers } from "redux"
import authenticateReducer from "./authenicateReducer"
import customerReducer from './customerReducer'
import customerFormReducer from "./customerFormReducer"

const rootReducer = combineReducers({
    authenticate: authenticateReducer,
    customers: customerReducer,
    forms: customerFormReducer
})

export default rootReducer
