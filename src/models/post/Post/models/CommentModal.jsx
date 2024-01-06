import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const CommentModal = () => {
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
    
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24}}>
      {/* Your comment input field and submit button go here */}
      <TextField />
      <Button>Submit</Button>
    </Box>    
  )
}

export default CommentModal