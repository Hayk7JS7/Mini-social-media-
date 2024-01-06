import { Box, Button, Modal, ThemeProvider, Typography, createTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import Insert from './Insert'
import { deleteUserPost } from '../../../../features/rootUserProfile/userPost/userPostDeleteSlice/api/deleteUserPost'

const theme = createTheme()

const CommentsOptions = ({ open, setOpen, id, authorId, imageUrl, avatar, title, author }) => {
  const dispatch = useDispatch()
  const [showInsert, setShowInsert] = useState(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }
      const handleClose = () => setOpen(false)

      const handleInsert = () => {
        setShowInsert(true)
      }
      const handleRemove = () => {
        const postInfo = {id, imageUrl}
        dispatch(deleteUserPost(postInfo))
        handleClose()
      }

  return (
    <>
    <ThemeProvider theme={theme}>
        <Insert open={showInsert} closeModal={handleClose} setOpen={setShowInsert} id={id} authorId={authorId} imageUrl={imageUrl} avatar={avatar} title={title} author={author} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color="primary" onClick={handleInsert}>
                Insert
              </Button>
              <Button variant="contained" color="secondary" onClick={handleRemove}>
                Delete
              </Button>
            </Box>
          </Box>
        </Modal>   
      </ThemeProvider>
    </>
  )
}

export default CommentsOptions
