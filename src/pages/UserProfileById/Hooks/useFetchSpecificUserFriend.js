import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getSpecificUserFriends } from "../../../features/rootFriends/specificUserFriendsSlice/api/getSpecificUserFriends"

const useFetchSpecificUserFriend = ({userId, searchedUserId}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = {
            userId,
            searchedUserId
        }
        dispatch(getSpecificUserFriends(getInfo))
    }, [dispatch, searchedUserId])
}

export default useFetchSpecificUserFriend