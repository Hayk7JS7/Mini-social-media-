import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material'
import { selectUserProfileDetails } from '../../../features/rootUserProfile/userProfile/actions'
import { useBigImg } from './hooks/useBigImg'
import SkeletonLoader from './models/SkeletonLoader'
import CommentsOptions from './components/CommentsOptions'
import useLike from './hooks/useLike'
import BigImageModal from './models/BigImageModal'
import CardHeaderComponent from './components/CardHeaderComponent'
import CardMediaComponent from './components/CardMediaComponent'
import CardActionsComponent from './components/CardActionsComponent'
import TaggedUsersOverlay from './components/TaggedUsersOverlay'

const Post = ({ title, author, avatar, imageUrl, createdAt, id, authorId, taggedUsers = [], admin }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [open, setOpen] = useState(false)
  const [showTaggedUsersOverlay, setShowTaggedUsersOverlay] = useState(false)
  const { _id } = useSelector(selectUserProfileDetails)
  const navigate = useNavigate()

  const { setLike, like } = useLike({ id, authorId })
  const { bigScreenImg, handleOpenBigScreenImg, handleCloseBigScreenImg } = useBigImg()

  const handleAvatarClick = () => {
    if (admin) return
      else if (_id === authorId) {
        navigate('/profile')
      } else {
        navigate(`/profile/${authorId}`)
      }
  }

  const handleImageClick = () => {
    setShowTaggedUsersOverlay(!showTaggedUsersOverlay)
  }

  const handleOpen = () => setOpen(true)

  const formattedDate = createdAt ? new Date(createdAt).toString().split(' GMT')[0] : ''

  return (
    <Card sx={{ maxWidth: '550px', maxHeight: '550px', margin: 2 }}>
      <CardHeaderComponent
        author={author}
        avatar={avatar}
        handleAvatarClick={handleAvatarClick}
        admin={admin}
        handleOpen={handleOpen}
        formattedDate={formattedDate}
      />

      {!imageLoaded && <SkeletonLoader variant="rectangular" height={500} width={500} />}

      <CardMediaComponent
        setImageLoaded={setImageLoaded}
        imageUrl={imageUrl}
        handleImageClick={handleImageClick}
        handleOpenBigScreenImg={handleOpenBigScreenImg}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>

      <CardActionsComponent like={like} setLike={setLike} />

      {admin && (
        <CommentsOptions open={open} setOpen={setOpen} id={id} authorId={authorId} imageUrl={imageUrl} avatar={avatar} title={title} author={author} />
      )}

      <BigImageModal
        open={bigScreenImg}
        onClose={handleCloseBigScreenImg}
        imageUrl={imageUrl}
      />


      {showTaggedUsersOverlay && (
        <TaggedUsersOverlay taggedUsers={taggedUsers} navigate={navigate} />
      )}
    </Card>
  )
}

export default Post
