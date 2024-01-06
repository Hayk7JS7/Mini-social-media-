import React from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const BigImageModal = ({ open, onClose, imageUrl }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ maxHeight: '100vh', overflow: 'hidden' }}>
          <img
            src={imageUrl}
            alt="Big Image"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: 'calc(100vh - 128px)', 
              objectFit: 'contain',
            }}
          />
        </DialogContent>
      </Dialog>
    )
  }
  
  export default BigImageModal
  
