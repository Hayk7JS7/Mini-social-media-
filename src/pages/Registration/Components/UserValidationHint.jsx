import React from 'react'
import { passwordDetailedRegex } from '../utils/registrationRegex'
import { Box, Fade, Typography } from '@mui/material'

const UserValidationHint = ({password}) => {
  return (
    <>
        {password.length > 0 && (
            <Fade in={password.length > 0}>
            <Box>
                <Typography variant="body1" sx={{color: passwordDetailedRegex.lowerUpper.test(password) ? 'green' : 'red'}}>Password must contain lowercase and uppercase.</Typography>
                <Typography variant="body1" sx={{color: passwordDetailedRegex.digit.test(password) ? 'green' : 'red'}}>Password must contain digits.</Typography>
                <Typography variant="body1" sx={{color: passwordDetailedRegex.length.test(password) ? 'green' : 'red'}}>Password must have more than 8 length.</Typography>
                <Typography variant="body1" sx={{color: passwordDetailedRegex.specialChar.test(password) ? 'green' : 'red'}}>Password must contain special Character.</Typography>
            </Box>
            </Fade>
        )}    
    </>
  )
}

export default UserValidationHint
