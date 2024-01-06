import { combineReducers } from "@reduxjs/toolkit";
import userPostCreateReducer from "./userPostCreateSlice/userPostCreateSlice";
import userPostDeleteReducer from "./userPostDeleteSlice/userPostDeleteSlice";
import userPostReadReducer from "./userPostReadSlice/userPostReadSlice";
import userPostUpdateReducer from "./userPostUpdateSlice/userPostUpdateSlice";
import userPostsReducer from "./userPostsSlice/userPostsSlice";
import userPostLikeReducer from "./userPostLikeSlice/userPostLikeSlice";
import specificUserPostReducer from "./specificUserPost/specificUserPostSlice";

const rootUserPost = combineReducers({
    userPostCreate: userPostCreateReducer,
    userPostDelete: userPostDeleteReducer,
    userPostRead: userPostReadReducer,
    userPostUpdate: userPostUpdateReducer,
    userPosts: userPostsReducer,
    postLike: userPostLikeReducer,
    specificUserPost: specificUserPostReducer
})

export default rootUserPost
