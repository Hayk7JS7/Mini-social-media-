import { combineReducers } from "@reduxjs/toolkit"
import currentUserFriendsReducer from "./currentUserFriendsSlice/currentUserFriendsSlice"
import specificUserFriendsReducer from "./specificUserFriendsSlice/specificUserFriendsSlice"

const rootFriends = combineReducers({
    currentUserFriend: currentUserFriendsReducer,
    specificUserFriend: specificUserFriendsReducer
})

export default rootFriends