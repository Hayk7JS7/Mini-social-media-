import React from 'react'
import { selectCurrentUserFriendsDetails } from '../../../features/rootFriends/currentUserFriendsSlice/actions'
import { Typography, Grid, Avatar, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FriendsTab = () => {
  const navigate = useNavigate()
  const { acceptedFriends } = useSelector(selectCurrentUserFriendsDetails)

  return (
      <Box>
        <Typography variant="h5" gutterBottom>
          Friends
        </Typography>
        <Grid container spacing={2}>
          {acceptedFriends.map(friend => {
            return (
              <Grid item xs={4} onClick={() => navigate(`/profile/${friend.friendId}`)} sx={{cursor: 'pointer'}} key={Math.random()}> 
                    <Avatar src={friend.avatar} alt="Friend 1" />
                    <Typography variant="subtitle1">{friend.username}</Typography>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    )
}


export default FriendsTab
