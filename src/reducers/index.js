import { combineReducers } from "redux"
import authenticateReducer from "./authenicateReducer"
import customerReducer from './customerReducer'
import customerFormReducer from "./customerFormReducer"
import productReducer from "./productReducer"
import productFormReducer from "./productFormReducer"
import billingReducer from "./billingReducer"

const rootReducer = combineReducers({
    authenticate: authenticateReducer,
    customers: customerReducer,
    customerForms: customerFormReducer,
    products: productReducer,
    productForms: productFormReducer,
    bills: billingReducer
})

export default rootReducer
