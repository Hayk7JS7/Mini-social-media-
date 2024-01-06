import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, TextField, Button, Typography, Checkbox } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsername } from '../../../../../features/rootHome/globalSearch/searchedUserByName/api/searchUsername'
import { selectGlobalSearchByNameDetails } from '../../../../../features/rootHome/globalSearch/searchedUserByName/actions'
import { AvatarStyled, UserContainer } from '../style'

const AddPersonModal = ({ open, onClose }) => {
  const dispatch = useDispatch()
  const { userSearchedArray } = useSelector(selectGlobalSearchByNameDetails)
  const [searchValue, setSearchValue] = useState('')
  const [users, setUsers] = useState([])
  const [addedUsers, setAddedUsers] = useState([])

  useEffect(() => {
    if (searchValue && userSearchedArray) {
      setUsers(userSearchedArray)
    }
  }, [userSearchedArray])

  const handleSearchChange = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value)
    } else {
      setSearchValue('')
    }
  }

  const handleAddPerson = () => {
    return onClose(setSearchValue, setUsers, addedUsers)
  }

  const handleCheckboxChange = (user, checked) => {
    if (checked) {
      const isUserAlreadyAdded = addedUsers.some((addedUser) => addedUser.userId === user._id)
      if (!isUserAlreadyAdded) {
        setAddedUsers((prevUsers) => [...prevUsers, { userId: user._id, username: user.username }])
      }
    } else {
      setAddedUsers((prevUsers) => prevUsers.filter((addedUser) => addedUser.userId !== user._id))
    }
  }

  useEffect(() => {
    if (searchValue) {
      const boundaryEffect = setTimeout(() => {
        dispatch(searchUsername(searchValue))
      }, 2000)
      return () => clearTimeout(boundaryEffect)
    }
  }, [searchValue])

  return (
    <Dialog open={open} onClose={() => onClose(setSearchValue, setUsers, addedUsers)} maxWidth="sm" fullWidth>
      <DialogContent>
        <TextField
          label="Search Person"
          fullWidth
          variant="outlined"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {users.map((user) => (
          <UserContainer key={user._id}>
            <Checkbox
              checked={addedUsers.some((addedUser) => addedUser.userId === user._id)}
              onChange={(e) => handleCheckboxChange(user, e.target.checked)}
            />
            <AvatarStyled src={user.avatar} alt={user.username} />
            <Typography variant="subtitle1">{user.username}</Typography>
          </UserContainer>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddPerson}
          style={{ marginTop: '1rem' }}
        >
          Add Person
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default AddPersonModal
