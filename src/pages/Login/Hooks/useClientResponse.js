import { useEffect, useState } from "react"
import { selectloginDetails } from "../../../features/rootUserAuth/userAuthLogin/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { findUserByToken } from "../../../features/rootUserAuth/userAuthToken/api/findUserByToken"
import { getUserInfo } from "../../../features/rootUserProfile/userProfile/userProfileSlice"
import { selectAuthTokenDetails } from "../../../features/rootUserAuth/userAuthToken/selectors"

export const useClientResponse = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    const { userLoged, userLogedPending, userLogedRejection } = useSelector(selectloginDetails)
    const { token, isValidToken } = useSelector(selectAuthTokenDetails)

    const [openResponse, setOpenResponse] = useState(false)
    const [clientResponseMessage, setClientResonseMessage] = useState('')    

    const handleCloseResponse = () => {
        setOpenResponse(false)
        setClientResonseMessage('')
    }

    useEffect(() => {
        if(userLoged) {
            window.localStorage.setItem('token', userLoged.accessToken)
            if(token && isValidToken) {
                dispatch(findUserByToken(token))
                navigate('/profile')
            } else {
                dispatch(getUserInfo(userLoged))
                navigate('/profile')        
            }
          }
        if(userLogedPending) {
        // console.log(userLogedPending)
        }
        if(userLogedRejection) {
            setOpenResponse(true)
            setClientResonseMessage(userLogedRejection)
        }
    }, [userLoged, userLogedPending, userLogedRejection, token, isValidToken, setOpenResponse, setClientResonseMessage, navigate, dispatch])

    return { handleCloseResponse, openResponse, clientResponseMessage, setOpenResponse, setClientResonseMessage }
}
