import React from 'react'
import AddButton from './components/AddButton'
import PostModal from './components/PostModal'
import { Avatar, TextField, Typography } from '@mui/material'
import { UserBox } from './ModalStyles'
import ActionIcons from './components/ActionIcons'
import PostActions from './components/PostActions'

const ModifyModal = ({open, setOpen, modalName, avatar = '', username = 'Anonymous', postTitle, setPostTitle, handlePost, handleImageChange, setTagedUsers, buttonBoolean = true, updateTagesBoolean = true}) => {
    return (
        <>
          {buttonBoolean && <AddButton onClick={e => setOpen(true)} />}
          <PostModal open={open} onClose={e => setOpen(false)}>
            <Typography variant='h6' color="gray" textAlign="center">{modalName}</Typography>
            <UserBox>
              <Avatar sx={{ width: 30, height: 30 }} src={avatar} />
              <Typography fontWeight={500} variant="span">{username}</Typography>
            </UserBox>
            <TextField
              fullWidth
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="whats's on your mind"
              variant="standard"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <ActionIcons onImageClick={handleImageChange} setTagedUsers={setTagedUsers} updateTagesBoolean={updateTagesBoolean} />
            <PostActions onPost={handlePost} />
          </PostModal>
        </>
      )
}

export default ModifyModal
