import { configureStore } from "@reduxjs/toolkit"
import rootUserAuth from "../features/rootUserAuth/rootUserAuth"
import rootUserProfile from "../features/rootUserProfile/rootUserProfile"
import rootHome from "../features/rootHome/rootHome"
import rootFriends from "../features/rootFriends/rootFriends"
import rootUserInfo from "../features/rootUserInfo/rootUserInfo"

const store = configureStore({
    reducer: {
        userAuth: rootUserAuth,
        userProfile: rootUserProfile,
        rootHome: rootHome,
        rootFriends: rootFriends,
        rootUserInfo: rootUserInfo
    }
})

export default store