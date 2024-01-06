import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserProfileDetails } from '../../../features/rootUserProfile/userProfile/actions'
import ModifyModal from '../../../models/post/models/ModifyModal/ModifyModal'
import { selectUserPostCreateDetails } from '../../../features/rootUserProfile/userPost/userPostCreateSlice/actions'
import { createUserPost } from '../../../features/rootUserProfile/userPost/userPostCreateSlice/api/createUserPost'

const AddPosts = () => {
    const dispatch = useDispatch()
    const { createError, createStatus } = useSelector(selectUserPostCreateDetails)
    const { username, avatar, _id } = useSelector(selectUserProfileDetails)
    const [open, setOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [postTitle, setPostTitle] = useState('')
    const [taggedUsers, setTagedUsers] = useState([])
    const handlePost = () => {
      if (postTitle && selectedImage) {
          const formData = new FormData()
          formData.append('content', postTitle)
          formData.append('authorId', _id)
          formData.append('author', username)
          formData.append('media_url', selectedImage)
          formData.append('tag_users', JSON.stringify(taggedUsers))
          dispatch(createUserPost(formData))   
      }
  }
  useEffect(() => {
    if (createStatus === 'pending') {
      setSelectedImage(null)
      setPostTitle('')
      setOpen(false) 
    }
    if(createError) {
      
    }
}, [createStatus, createError, dispatch])
  const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
        }
    }
  
  return (
    <>
      <ModifyModal open={open} setOpen={setOpen} modalName='Create post' username={username} avatar={avatar} setTagedUsers={setTagedUsers} postTitle={postTitle} setPostTitle={setPostTitle} handlePost={handlePost} handleImageChange={handleImageChange} />
    </>
  )
}

export default AddPosts
