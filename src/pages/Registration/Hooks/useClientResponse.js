import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectRegisterDetails } from "../../../features/rootUserAuth/userAuthRegistr/selectors"

export const useClientResponse = () => {
    const navigate = useNavigate()
    const { userRegistr, userRegistrPending, userRegistrRejection } = useSelector(selectRegisterDetails)

    const [openResponse, setOpenResponse] = useState(false)
    const [clientResponseMessage, setClientResonseMessage] = useState('')

    const handleCloseResponse = () => {
        setOpenResponse(false)
        setClientResonseMessage('')
    }

    useEffect(() => {
        if(userRegistr) {
          navigate('/login')
        }
        if(userRegistrPending) {
          // console.log('loading', userRegistrPending)
        }
        if(userRegistrRejection) {
          setOpenResponse(true)
          setClientResonseMessage(userRegistrRejection)
        }
      }, [userRegistr, userRegistrPending, userRegistrRejection, navigate])

    return { openResponse, clientResponseMessage, handleCloseResponse}
}
