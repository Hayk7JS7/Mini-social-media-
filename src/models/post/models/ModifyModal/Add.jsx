import React, { useEffect, useState } from 'react'
import { UserBox } from './ModalStyles'
import { Typography, Avatar, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../../../features/rootUserProfile/userPost/Api/makeUserPost'

import AddButton from './components/AddButton'
import ActionIcons from './components/ActionIcons'
import PostModal from './components/PostModal'
import PostActions from './components/PostActions'
import { selectUserPostDetails } from '../../../../features/rootUserProfile/userPost/actions'
import { selectUserProfileDetails } from '../../../../features/rootUserProfile/userProfile/actions'

const Add = () => {
  const dispatch = useDispatch()
  const { posts, postError, postPending } = useSelector(selectUserPostDetails)
  const { username, userProfileURL, _id } = useSelector(selectUserProfileDetails)
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [postTitle, setPostTitle] = useState('')

  const handlePost = () => {
    if (postTitle && selectedImage) {
        const formData = new FormData()
        formData.append('content', postTitle)
        formData.append('authorId', _id)
        formData.append('author', username)
        formData.append('media_url', selectedImage)
        dispatch(createPost(formData))
    }
}

  useEffect(() => {
    if (posts) {
      setSelectedImage(null)
      setPostTitle('')
      setOpen(false)
    }
    if (postError) {
    }
    if (postPending) {
    }
  }, [posts, postError, postPending])

  const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
        }
  }

  return (
    <>
      <AddButton onClick={e => setOpen(true)} />
      <PostModal open={open} onClose={e => setOpen(false)}>
        <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src={userProfileURL} />
          <Typography fontWeight={500} variant="span">{username}</Typography>
        </UserBox>
        <TextField
          fullWidth
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="whats's on your mind"
          variant="standard"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <ActionIcons onImageClick={handleImageChange} />
        <PostActions onPost={handlePost} />
      </PostModal>
    </>
  )
}

export default Add
