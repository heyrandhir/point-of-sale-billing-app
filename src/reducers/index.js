import authenticateReducer from "./authenicateReducer"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
    authenticate: authenticateReducer
})

export default rootReducer
