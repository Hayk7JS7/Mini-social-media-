import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserProfileDetails } from '../../../../features/rootUserProfile/userProfile/actions'
import { updateUserAvatar } from '../../../../features/rootUserProfile/userProfile/api/updateUserAvatar'
import { setTempAvatar } from '../../../../features/rootUserProfile/userProfile/userProfileSlice'
import { Box } from '@mui/material'
import AvatarDisplay from './AvatarDisplay'
import AvatarUploader from './AvatarUploader'
import UserInfo from './UserInfo'

const HeaderUserProfile = () => {
  const dispatch = useDispatch()
  const userProfile = useSelector(selectUserProfileDetails)
  const { firstName, lastName, username, _id, avatar } = userProfile
  const [selectedImage, setSelectedImage] = useState('')
  const [imageUrl, setImageUrl] = useState(avatar)
  const avatarName = firstName && firstName.substring(0, 1) + lastName.substring(0, 1)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      const tempImageUrl = URL.createObjectURL(file)
      dispatch(setTempAvatar(tempImageUrl))
      setImageUrl(tempImageUrl)
    }
  }

  useEffect(() => {
    if (selectedImage) {
      const formData = new FormData()
      formData.append('avatar', selectedImage)
      formData.append('userId', _id)
      dispatch(updateUserAvatar(formData))
      setSelectedImage('')
    }

    return () => URL.revokeObjectURL(imageUrl)
  }, [selectedImage, imageUrl, _id, dispatch])

  return (
    <Box display="flex" flexDirection="row" alignItems="center" mb={2} position="relative">
      <AvatarDisplay avatar={avatar} avatarName={avatarName} />
      <AvatarUploader handleImageChange={handleImageChange} />
      <UserInfo username={username} fullName={`${firstName} ${lastName}`} />
    </Box>
  )
}

export default HeaderUserProfile
