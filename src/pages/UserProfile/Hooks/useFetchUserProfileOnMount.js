import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { findUserByToken } from "../../../features/rootUserAuth/userAuthToken/api/findUserByToken"
// import { getUserInfo } from "../../../features/rootUserProfile/userProfile/userProfileSlice"


const useFetchUserProfileOnMount = () => {
    const userToken = window.localStorage.getItem('token')
    const dispatch = useDispatch()
    useEffect(() => {
        if(!userToken)return
        dispatch(findUserByToken())
    }, [userToken, dispatch])
}

export default useFetchUserProfileOnMount