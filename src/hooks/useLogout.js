import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { makeInitialLoged } from "../features/rootUserAuth/userAuthLogin/userAuthLoginSlice"
import { makeInitialAuthToken } from "../features/rootUserAuth/userAuthToken/userAuthTokenSlice"
import { makeInitialProfile } from "../features/rootUserProfile/userProfile/userProfileSlice"
import { makeInitialStateDeleteAccount } from "../features/rootUserProfile/userSettings/userSettingsSlice"
import { makeInitialCurrentUserFriend } from "../features/rootFriends/currentUserFriendsSlice/currentUserFriendsSlice"

const useLogout = ({ logoutDependency = "idle" }) => {
        const dispatch = useDispatch()
        useEffect(() => {
                if(logoutDependency === 'completed') {
                        window.localStorage.removeItem("token")
                        dispatch(makeInitialLoged())
                        dispatch(makeInitialAuthToken())
                        dispatch(makeInitialProfile())
                        dispatch(makeInitialCurrentUserFriend())
                        dispatch(makeInitialStateDeleteAccount())
                }
        }, [logoutDependency, dispatch])
}

export default useLogout
