import * as React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function ResponseBar({ snackbarStatus, message, openResponse, setCloseResponse }) {
  const handleClose = () => {
    setCloseResponse(false)
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openResponse} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbarStatus ? 'success' : 'error'} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
