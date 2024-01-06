import React, { useEffect, useState } from 'react'
import ModifyModal from '../../models/ModifyModal/ModifyModal'
import { useDispatch } from 'react-redux'
import { updateUserPost } from '../../../../features/rootUserProfile/userPost/userPostUpdateSlice/api/updateUserPost'

const Insert = ({open, setOpen, id, authorId, imageUrl, avatar, title, author, closeModal}) => {
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(imageUrl)
    const [postTitle, setPostTitle] = useState(title)

    const handlePost = () => {
        if(selectedImage && postTitle) {
          const formData = new FormData()
          formData.append('media_url', selectedImage)
          formData.append('previousImage', imageUrl)
          formData.append('content', postTitle)
          const postData = {
            id,
            formData
          }
          dispatch(updateUserPost(postData))
          setOpen(false)
          closeModal()
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
        }
    }
  return (
    <>
      <ModifyModal buttonBoolean={false} open={open} setOpen={setOpen} modalName='Update Post' avatar={avatar} username={author} postTitle={postTitle} setPostTitle={setPostTitle} handlePost={handlePost} handleImageChange={handleImageChange} updateTagesBoolean={false} />
    </>
  )
}

export default Insert
