import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import FriendListModal from '../../UserProfile/Models/FriendListModal'

const UserProfileStats = ({ user, userFriends, post, friendList }) => {
  const [isFriendListOpen, setIsFriendListOpen] = useState(false)

  const handleOpenFriendList = () => {
    setIsFriendListOpen(true)
  }

  const handleCloseFriendList = () => {
    setIsFriendListOpen(false)
  }

  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <Typography variant="h6">Posts: {userFriends ? post.length : !user.publicStatus ? <LockPersonIcon /> : post.length}</Typography>
      <Typography variant="h6" onClick={handleOpenFriendList} style={{ cursor: 'pointer' }}>
        Friends: {userFriends ? friendList.length : !user.publicStatus ? <LockPersonIcon /> : friendList.length}
      </Typography>
      <Typography variant="h6">Connections: {userFriends ? friendList.length : !user.publicStatus ? <LockPersonIcon /> : friendList.length}</Typography>
      
      <FriendListModal isOpen={isFriendListOpen} onClose={handleCloseFriendList} friendList={friendList} />
    </Box>
  )
}

export default UserProfileStats
