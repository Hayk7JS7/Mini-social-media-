import { combineReducers } from "@reduxjs/toolkit";
import globalPostsReducer from "./globalPosts/globalPostsSlice";
import rootGlobalSearch from "./globalSearch/rootGlobalSearch";


const rootHome = combineReducers({
    rootGlobalSearch: rootGlobalSearch,
    globalPosts: globalPostsReducer
})

export default rootHome