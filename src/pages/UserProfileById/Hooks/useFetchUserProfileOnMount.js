import { getUserById } from "../../../features/rootHome/globalSearch/searchedUserById/api/getUserById"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const useFetchUserProfileOnMount = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if(!id)return 
        dispatch(getUserById(id))
    }, [id])
}

export default useFetchUserProfileOnMount