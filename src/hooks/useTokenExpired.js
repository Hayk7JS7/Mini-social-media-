import { useEffect, useState } from "react"
import useLogout from "./useLogout"

export const useTokenExpired = () => {
    const [logout, setLogout] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token'))
    useLogout({ logoutDependency: logout })

    useEffect(() => {
        if(!token) {
            setLogout('completed')
            setToken('')
        }
    }, [token])
}
