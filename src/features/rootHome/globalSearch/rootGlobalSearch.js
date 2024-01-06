import searchedUserByIdReducer from "./searchedUserById/searchedUserByIdSlice";
import searchedUserByNameReducer from "./searchedUserByName/searchedUserByNameSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootGlobalSearch = combineReducers({
    searchByName: searchedUserByNameReducer,
    searchById: searchedUserByIdReducer
})

export default rootGlobalSearch
