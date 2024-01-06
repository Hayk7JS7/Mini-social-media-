import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGlobalSearchByIdDetails } from "../../../features/rootHome/globalSearch/searchedUserById/actions"
import { selectSpecificUserPostCreateDetails } from "../../../features/rootUserProfile/userPost/specificUserPost/actions"
import { selectSpecificUserFriendDetails } from "../../../features/rootFriends/specificUserFriendsSlice/actions"
import { selectCurrentUserFriendsDetails } from "../../../features/rootFriends/currentUserFriendsSlice/actions"
import { makeInitialPostState } from "../../../features/rootUserProfile/userPost/specificUserPost/specificUserPostSlice"

export const useUpdateData = (id) => {
    const dispatch = useDispatch()
    const { userSearched } = useSelector(selectGlobalSearchByIdDetails)
    const { acceptedFriends } = useSelector(selectCurrentUserFriendsDetails)
    const { userPost, userPostStatus } = useSelector(selectSpecificUserPostCreateDetails)
    const { specificFriends } = useSelector(selectSpecificUserFriendDetails)

    const [post, setPost] = useState([])
    const [user, setUser] = useState({})
    const [searchedUserFriend, setSearchUserFriend] = useState([])
    const [userFriends, setUserFriends] = useState(() => {
      return acceptedFriends.find(friends => friends?.friendId?.toString() === id) ? true : false
    })

    useEffect(() => {
        if (acceptedFriends.length > 0) {
        const checkMyFriends = acceptedFriends.find(friends => friends.friendId.toString() === id)
        if (checkMyFriends) {
            setUserFriends(true)
        } else {
            setUserFriends(false)
        }
        } else {
        setUserFriends(false)
        }
  }, [acceptedFriends, userFriends, id])

  useEffect(() => {
    if (!userSearched) return
    setUser(userSearched.data)
  }, [userSearched, user])

  useEffect(() => {
    if (!userPost) return
    else {
      setPost(userPost)
    }
    if (userPostStatus === 'idle') {
      setPost([])
    }
  }, [userPost, post, dispatch, userPostStatus])

  useEffect(() => {
    dispatch(makeInitialPostState())
  }, [id, dispatch])

  useEffect(() => {
      setSearchUserFriend(specificFriends)
  }, [specificFriends, searchedUserFriend])

  return { post, user, searchedUserFriend, userFriends }
}
