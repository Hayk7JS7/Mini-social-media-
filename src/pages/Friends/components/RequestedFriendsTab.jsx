import React from 'react'
import { selectCurrentUserFriendsDetails } from '../../../features/rootFriends/currentUserFriendsSlice/actions'
import { Typography, Grid, Avatar, Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserProfileDetails } from '../../../features/rootUserProfile/userProfile/actions'
import { acceptFriendship } from '../../../features/rootFriends/currentUserFriendsSlice/api/acceptFrienship'

const RequestedFriendsTab = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { _id } = useSelector(selectUserProfileDetails)
  const { requestedFriends } = useSelector(selectCurrentUserFriendsDetails)

  const handleAccept = (id) => {
    const apiInfo = {
      acceptedFriendsId: _id,
      id
    }
    if(_id && id) {
      dispatch(acceptFriendship(apiInfo))
    }
  }
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Requested Friends
      </Typography>
      <Grid container spacing={2}>
        {requestedFriends.map(friend => {
          return (
            <Grid item xs={4} sx={{cursor: 'pointer'}} key={Math.random()}>
              <Avatar src={friend.avatar} alt="Requested Friend 1" onClick={() => navigate(`/profile/${friend.friendId}`)} />
              <Typography variant="subtitle1">{friend.username}</Typography>
              <Button variant="outlined" color="primary" onClick={() => handleAccept(friend.friendId)}>
                Accept
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )

}

export default RequestedFriendsTab
