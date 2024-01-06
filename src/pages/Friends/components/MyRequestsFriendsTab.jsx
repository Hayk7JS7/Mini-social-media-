import React from 'react'
import { Typography, Grid, Avatar, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCurrentUserFriendsDetails } from '../../../features/rootFriends/currentUserFriendsSlice/actions'
import { useNavigate } from 'react-router-dom'

const MyRequestsFriendsTab  = () => {
  const navigate = useNavigate()
  const { myRequests } = useSelector(selectCurrentUserFriendsDetails)
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
      My Requested Friends
      </Typography>
      <Grid container spacing={2}>
        {myRequests.map(friend => {
          return (
            <Grid item xs={4} onClick={() => navigate(`/profile/${friend.friendId}`)} sx={{cursor: 'pointer'}} key={Math.random()}>
              <Avatar src={friend.avatar} alt="Suggested Friend 1" />
              <Typography variant="subtitle1">{friend.username}</Typography>
            </Grid>  
          )
        })}
      </Grid>
    </Box>
  )
}

export default MyRequestsFriendsTab 
