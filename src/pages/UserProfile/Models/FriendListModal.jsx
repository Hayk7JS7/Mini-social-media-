import React from 'react'
import { Modal, Box, Typography, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserProfileDetails } from '../../../features/rootUserProfile/userProfile/actions'

const FriendListModal = ({ isOpen, onClose, friendList }) => {
  const { _id } = useSelector(selectUserProfileDetails)
  const navigate = useNavigate()

  const specificProfileNavigation = (profileId) => {
    if(profileId === _id) {
      onClose()
      setTimeout(() => {
        navigate('/profile')
      }, 1000)
    } else {
      onClose()
      setTimeout(() => {
        navigate(`/profile/${profileId}`)
      }, 1000)
    }
  }
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Typography variant="h5" mb={2} sx={{color: 'lightblue'}}>Friends List</Typography>
        {friendList.map((friend) => (
          <Box key={friend.friendId} display="flex" alignItems="center" mb={1} sx={{cursor: 'pointer'}} onClick={() => specificProfileNavigation(friend.friendId)}>
            <Avatar src={friend.avatar} alt={`${friend.username}'s avatar`} width={40} height={40} style={{ borderRadius: '50%', marginRight: 10 }} />
            <Typography sx={{color: 'lightblue'}}>{friend.username}</Typography>
          </Box>
        ))}
      </Box>
    </Modal>
  )
}

export default FriendListModal
