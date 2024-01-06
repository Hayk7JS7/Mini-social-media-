import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserProfileDetails } from '../../features/rootUserProfile/userProfile/actions'
import { useUpdateData } from './Hooks/useUpdateData'
import { useTokenExpired } from '../../hooks/useTokenExpired'
import UserProfileHeader from './Components/UserProfileHeader/UserProfileHeader'
import UserProfileStats from './Components/UserProfileStats'
import UserProfilePosts from './Components/UserProfilePosts'
import useFetchUserProfileOnMount from './Hooks/useFetchUserProfileOnMount'
import useFetchUserPostsOnMount from './Hooks/useFetchUserPostsOnMount'
import useAddFriend from './Hooks/useAddFriend'
import useGetFriendsInfo from './Hooks/useGetFriendsInfo'
import useFetchSpecificUserFriend from './Hooks/useFetchSpecificUserFriend'


const UserProfileById = () => {
  // console.log('UserProfileById rendering')
  const { id } = useParams()
  const { _id } = useSelector(selectUserProfileDetails)

  useTokenExpired()
  useFetchUserProfileOnMount(id)
  useFetchUserPostsOnMount({ _id: id, myUserId: _id })
  useGetFriendsInfo()
  useFetchSpecificUserFriend({ userId: _id, searchedUserId: id })
  const { add, setAdd } = useAddFriend(id)
  const { post, user, searchedUserFriend, userFriends } = useUpdateData(id) 

  return (
    <div>
      <UserProfileHeader user={user} userFriends={userFriends} add={add} setAdd={setAdd} />
      <UserProfileStats user={user} userFriends={userFriends} friendList={searchedUserFriend} post={post} />
      <UserProfilePosts post={post} user={user} />
    </div>
  )
}

export default UserProfileById
