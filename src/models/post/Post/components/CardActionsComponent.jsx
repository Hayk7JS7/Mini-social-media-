import React, { useState } from 'react'
import { Favorite, FavoriteBorder, Share, Comment } from '@mui/icons-material'
import { Box, Button, CardActions, Checkbox, IconButton, Modal, TextField } from '@mui/material'
// import CommentModal from '../models/CommentModal'

const CardActionsComponent = ({ like, setLike }) => {
  const [commentModalOpen, setCommentModalOpen] = useState(false)

  const handleCommentModalOpen = () => {
    setCommentModalOpen(true)
  }

  const handleCommentModalClose = () => {
    setCommentModalOpen(false)
  }


  return (
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={() => setLike(prev => !prev)}>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
      </IconButton>
      <IconButton aria-label="comment" onClick={handleCommentModalOpen}>
        <Comment />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>

      <Modal open={commentModalOpen} onClose={handleCommentModalClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24}}>
          <TextField />
          <Button>Submit</Button>
        </Box>       
        {/* <CommentModal /> */}
      </Modal>

    </CardActions>
  )
}

export default CardActionsComponent
