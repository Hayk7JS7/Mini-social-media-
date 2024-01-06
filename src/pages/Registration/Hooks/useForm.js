import { useState } from "react"
import { validateInput } from "../utils/validateInput"
import { useDispatch } from "react-redux"
import { userRegistrationAuth } from "../../../features/rootUserAuth/userAuthRegistr/api/userRegistrationAuth"

export const useForm = (initialState) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(initialState)
    const [error, setError] = useState(false)

    const handleValue = (e) => {
        setValue(preValue => ({ ...preValue, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        const areValidInputs = validateInput(value)
        if(areValidInputs) {
            dispatch(userRegistrationAuth(value))
        } else {
            setError(true)
        }
    }

    const handleToggleServices = () => {
        setValue(pre => {
          return {...pre, acceptTermsOfService: !pre.acceptTermsOfService}
        })
    }

    return { value, error, handleSubmit, handleValue, handleToggleServices }
}
