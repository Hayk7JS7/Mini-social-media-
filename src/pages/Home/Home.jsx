import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectGlobalPostsDetails } from '../../features/rootHome/globalPosts/actions'
import Post from '../../models/post/Post/Post'
import useFetchGlobalPosts from './Hooks/useFetchGlobalPosts'
import { useTokenExpired } from '../../hooks/useTokenExpired'

const Home = () => {
  // console.log('Home rendering')
  const { globalPosts } = useSelector(selectGlobalPostsDetails)
  const [post, setPost] = useState([])

  useTokenExpired()
  
  useEffect(() => {
    if(!globalPosts) return 
  
    setPost(globalPosts)
  }, [globalPosts])

  useFetchGlobalPosts()

  return (
    <Box>
      {post.map((post, key) => (
        <Post 
          key={key}
          author={post.author} 
          createdAt={post.createdAt} 
          title={post.content} 
          imageUrl={post.media_url} 
          id={post._id} 
          authorId={post.authorId}
          avatar={post.avatar}
          admin={false}
        />
      ))}

    </Box>
  )
}

export default Home
