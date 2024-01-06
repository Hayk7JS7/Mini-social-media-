import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material'

const DeleteAccountModal = ({ open, handleClose, password, setPassword, handleDeleteAccount }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogContent>
        <TextField
          label="Password"
          type='password'
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleDeleteAccount} color="primary">
          Delete Account 
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteAccountModal
