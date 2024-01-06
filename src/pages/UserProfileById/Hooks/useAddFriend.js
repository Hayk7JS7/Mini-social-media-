import { makeFriendRequest } from "../../../features/rootFriends/specificUserFriendsSlice/api/makeFriendRequest"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"
import { selectCurrentUserFriendsDetails } from "../../../features/rootFriends/currentUserFriendsSlice/actions"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteFriendRequest } from "../../../features/rootFriends/specificUserFriendsSlice/api/deleteFriendRequest"

const useAddFriend = (id) => {
    const searchedUser = useParams()
    const { _id } = useSelector(selectUserProfileDetails)
    const { myRequests, acceptedFriends } = useSelector(selectCurrentUserFriendsDetails)
    const dispatch = useDispatch()
    const [add, setAdd] = useState(() => {
        return myRequests.find(request => request?.friendId?.toString() === searchedUser?.id) ? true : false
    })

    useEffect(() => {
        const checkMyRequest = myRequests.find(request => request.friendId.toString() === searchedUser.id)
        const acceptedRequest = acceptedFriends.find(request => request.friendId.toString() === searchedUser.id)
        if(checkMyRequest) {
            setAdd(true)
        }
        if(acceptedRequest) {
            setAdd(false)
        }
        if(add && !checkMyRequest){
            const boundaryEffect = setTimeout(() => {
                const friendInfo = {
                    id,
                    requestId: _id,
                }
               dispatch(makeFriendRequest(friendInfo))
            }, 5000)
            return (() => clearTimeout(boundaryEffect))
        } 
        // else if(!add){
        //     const boundaryEffect = setTimeout(() => {
        //         const friendInfo = {
        //             id,
        //             deletedRequestFriendId: _id,
        //         }
        //        dispatch(deleteFriendRequest(friendInfo))
        //     }, 5000)
        //     return (() => clearTimeout(boundaryEffect))
        // }
    }, [ add, _id, id, dispatch])

    return {
        add, setAdd
    }
}

export default useAddFriend