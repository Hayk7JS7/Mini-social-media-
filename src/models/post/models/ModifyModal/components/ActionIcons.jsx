import React, { useState } from 'react'
import { Stack } from '@mui/material'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions'
import VideoCameraBack from '@mui/icons-material/VideoCameraBack'
import PersonAdd from '@mui/icons-material/PersonAdd'
import ImageUploader from './ImageUploader'
import AddPersonModal from '../models/AddPersonModal'
import { useDispatch } from 'react-redux'
import { makeInitialStateGlobalSearch } from '../../../../../features/rootHome/globalSearch/searchedUserByName/searchedUserByNameSlice'

const ActionIcons = ({ onImageClick, setTagedUsers, updateTagesBoolean }) => {
  const dispatch = useDispatch()
  const [isAddPersonModalOpen, setIsAddPersonModalOpen] = useState(false)

  const handlePersonAddClick = () => {
    setIsAddPersonModalOpen(true)
  }

  const handleCloseAddPersonModal = (setSearchValue, setUsers, addedUsers = []) => {
    setSearchValue('')
    setUsers([])
    setTagedUsers(addedUsers)
    dispatch(makeInitialStateGlobalSearch())
    setIsAddPersonModalOpen(false)
  }

  return (
    <Stack direction="row" gap={1} mt={2} mb={3}>
      <EmojiEmotions color="primary" />
      <ImageUploader onImageChange={onImageClick} />
      <VideoCameraBack color="success" />
      <PersonAdd
        color="error"
        sx={{ cursor: 'pointer' }}
        onClick={handlePersonAddClick}
      />

     {updateTagesBoolean && <AddPersonModal
        open={isAddPersonModalOpen}
        onClose={(setSearchValue, setUsers, addedUsers) => handleCloseAddPersonModal(setSearchValue, setUsers, addedUsers)}
      />}
    </Stack>
  )
}

export default ActionIcons
