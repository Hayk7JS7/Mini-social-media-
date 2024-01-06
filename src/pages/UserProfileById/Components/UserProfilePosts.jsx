import React from 'react'
import { Typography } from '@mui/material'
import Post from '../../../models/post/Post/Post'

const UserProfilePosts = ({ post, user }) => {
  return (
    <div>
      {post.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>
            Latest Posts
          </Typography>
        </>
      )}
      {post.length !== 0 && post.map((post, key) => (
        <Post
          key={key}
          author={post.author}
          createdAt={post.createdAt}
          title={post.content}
          imageUrl={post.media_url}
          id={post._id}
          avatar={user.avatar}
          authorId={post.authorId}
          admin={false}
        />
      ))}
    </div>
  )
}

export default UserProfilePosts
