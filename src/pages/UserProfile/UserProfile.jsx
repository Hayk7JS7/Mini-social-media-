import { useEffect, useState } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUserPostsDetails } from '../../features/rootUserProfile/userPost/userPostsSlice/actions'
import { selectUserProfileDetails } from '../../features/rootUserProfile/userProfile/actions'
import { selectCurrentUserFriendsDetails } from '../../features/rootFriends/currentUserFriendsSlice/actions'
import { useTokenExpired } from '../../hooks/useTokenExpired'
import useGetFriendsInfo from '../UserProfileById/Hooks/useGetFriendsInfo'
import useFetchUserPostsOnMount from './Hooks/useFetchUserPostsOnMount'
import HeaderUserProfile from './Components/HeaderUserProile/HeaderUserProfile'
import Post from '../../models/post/Post/Post'
import AddPosts from './Components/AddPosts'
// import useFetchUserProfileOnMount from './Hooks/useFetchUserProfileOnMount'

export default function UserProfile() {
  // console.log('UserProfile rendering')
  const { avatar } = useSelector(selectUserProfileDetails)
  const { acceptedFriends } = useSelector(selectCurrentUserFriendsDetails)
  const { posts } = useSelector(selectUserPostsDetails)
  const [myFriends, setMyFriends] = useState([])
  // useFetchUserProfileOnMount()

  useTokenExpired()

  useGetFriendsInfo()
  useFetchUserPostsOnMount()

  useEffect(() => {
    if(acceptedFriends.length === 0)return
    setMyFriends(acceptedFriends)
  }, [acceptedFriends, myFriends])

  return (
    <Box m={4}>
      <HeaderUserProfile />
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h6">Posts: {posts.length}</Typography>
        <Typography variant="h6">Friends: {myFriends.length}</Typography>
        <Typography variant="h6">Connections: {myFriends.length}</Typography>
      </Box>

      <Divider mb={2} />

      <Typography variant="h5" gutterBottom>
        Latest Posts
      </Typography>

      {posts.map((post, key) => (
        <Post 
          key={key}
          author={post.author} 
          createdAt={post.createdAt} 
          title={post.content} 
          imageUrl={post.media_url} 
          id={post._id} 
          avatar={avatar}
          authorId={post.authorId} 
          taggedUsers={post.tag_users}
          admin={true}
        />
      ))}

      <AddPosts />
    </Box>
  )
}
