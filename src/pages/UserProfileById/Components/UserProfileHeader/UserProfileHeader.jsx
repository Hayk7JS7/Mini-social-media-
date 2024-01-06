import React, { useState } from 'react'
import { Avatar, Box, Typography, Dialog } from '@mui/material'
import UserProfileAvatar from './UserProfileAvatar'
import UserInfo from './UserInfo'
import UserActions from './UserActions'

const UserProfileHeader = ({ user, userFriends, add, setAdd }) => {
  const [isAvatarBig, setIsAvatarBig] = useState(false)

  const handleAvatarDoubleClick = () => {
    setIsAvatarBig(true)
  }

  const handleCloseBigAvatar = () => {
    setIsAvatarBig(false)
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="center" mb={2} position="relative">
      <UserProfileAvatar user={user} handleAvatarDoubleClick={handleAvatarDoubleClick} />
      <UserInfo user={user} />
      <UserActions userFriends={userFriends} add={add} setAdd={setAdd} />
      <Dialog open={isAvatarBig} onClose={handleCloseBigAvatar} maxWidth="md" fullWidth>
        <Avatar
          sx={{
            width: '100%',
            height: 'auto',
            cursor: 'pointer',
            borderRadius: '0',
          }}
          alt="User Profile Picture (Big)"
          src={user.avatar}
          onClick={handleCloseBigAvatar}
        >
          <Typography variant="h3">{123}</Typography>
        </Avatar>
      </Dialog>
    </Box>
  )
}

export default UserProfileHeader
