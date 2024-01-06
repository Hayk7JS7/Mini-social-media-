import { readGlobalPosts } from "../../../features/rootHome/globalPosts/api/readGlobalPosts"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"


const useFetchGlobalPosts = () => {
    const { _id } = useSelector(selectUserProfileDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readGlobalPosts(_id))
    }, [])
}

export default useFetchGlobalPosts