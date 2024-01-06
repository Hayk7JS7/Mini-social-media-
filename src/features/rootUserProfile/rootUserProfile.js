import { combineReducers } from "@reduxjs/toolkit"
import userProfileReducer from "./userProfile/userProfileSlice"
import rootUserPost from "./userPost/rootUserPost"
import userSettingsReducer from "./userSettings/userSettingsSlice"


const rootUserProfile = combineReducers({
    rootUserPost: rootUserPost,
    userProfile: userProfileReducer,
    userSettings: userSettingsReducer
})

export default rootUserProfile
