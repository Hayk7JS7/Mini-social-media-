import React from 'react'
import { Typography, FormControlLabel, Switch } from '@mui/material'

const AccountPrivacySwitch = ({ isPublicAcount, togglePrivacy }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Account Privacy
      </Typography>
      <FormControlLabel
        control={<Switch color="primary" checked={isPublicAcount} onChange={togglePrivacy} />}
        label={isPublicAcount ? 'Public Account' : 'Private Account'}
      />
    </>
  )
}

export default AccountPrivacySwitch
