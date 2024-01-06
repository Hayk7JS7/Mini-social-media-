import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LockIcon from '@mui/icons-material/Lock'
import { selectGlobalSearchByNameDetails } from '../../features/rootHome/globalSearch/searchedUserByName/actions'
import { Box, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { selectUserProfileDetails } from '../../features/rootUserProfile/userProfile/actions'

const SearchList = ({ setSearchUserName }) => {
    const navigate = useNavigate()
  const { userSearchedArray } = useSelector(selectGlobalSearchByNameDetails)
  const { _id } = useSelector(selectUserProfileDetails)
  const [openModal, setOpenModal] = useState(true)


  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleNavigateSearchedUserProfile = (id) => {
    if(_id === id){
        setSearchUserName('')
        navigate('/profile')
    } else {
        setTimeout(() => {
            setSearchUserName('')
            navigate(`/profile/${id}`)
        }, 1500)    
    } 
    handleCloseModal()
  }

  return (
    <Box>
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="xs" fullWidth>
        <DialogTitle>User List</DialogTitle>
        <DialogContent>
          <List>
            {userSearchedArray && userSearchedArray.map((user) => (
              <ListItem key={user._id} onClick={() => handleNavigateSearchedUserProfile(user._id)} sx={{cursor: 'pointer'}}>
                <ListItemAvatar>
                  <Avatar src={user.avatar} />
                </ListItemAvatar>
                {!user.publicStatus && <LockIcon />}
                <ListItemText primary={user.username} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default SearchList
