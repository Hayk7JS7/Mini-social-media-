import { getUserFriendsInfo } from "../../../features/rootFriends/currentUserFriendsSlice/api/getUserFriendsInfo"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useGetFriendsInfo = () => {
    const { _id } = useSelector(selectUserProfileDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!_id)return
        dispatch(getUserFriendsInfo(_id))
    }, [_id, dispatch])
}

export default useGetFriendsInfo