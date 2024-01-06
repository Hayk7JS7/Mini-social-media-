import { combineReducers } from "@reduxjs/toolkit"
import userAuthRegisterReducer from "./userAuthRegistr/userAuthRegisterSlice"
import userAuthLoginReducer from "./userAuthLogin/userAuthLoginSlice"
import userAuthTokenReducer from "./userAuthToken/userAuthTokenSlice"

const rootUserAuth = combineReducers({
    register: userAuthRegisterReducer,
    login: userAuthLoginReducer,
    token: userAuthTokenReducer
})

export default rootUserAuth