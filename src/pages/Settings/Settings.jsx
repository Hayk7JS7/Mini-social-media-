import { Box, Paper, Typography, Button, Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { setPublicState } from '../../features/rootUserProfile/userProfile/userProfileSlice'
import { selectUserSettingsProfileDetails } from '../../features/rootUserProfile/userSettings/actions'
import { useClientResponse } from './Hooks/useClientResponse'
import { useTokenExpired } from '../../hooks/useTokenExpired'
import AccountPrivacySwitch from './Components/AccountPrivacySwitch'
import useUpdateProfile from './utils/useUpdateProfile'
import DeleteAccountModal from './models/DeleteAccountModal'
import useDeleteProfile from './utils/useDeleteProfile'
import useLogout from '../../hooks/useLogout'
import useAccountPrivacy from './utils/useAccountPrivacy'
import ResponseBar from '../../models/clientResponseBar/responseBar'
import UpdateUserAccount from './Components/UpdateUserAccount'

const Settings = () => {
  // console.log('Settings rendering')
  const { setOpenModal } = useUpdateProfile()
  const { passwordError, setPasswordError, password, setPassword, openModalDelete, setOpenModalDelete, handleDeleteAccount } = useDeleteProfile()
  const { deleteUserStatus } = useSelector(selectUserSettingsProfileDetails)

  useTokenExpired()
  useLogout({ logoutDependency: deleteUserStatus })

  const { isPublicAccount, setisPublicAccount } = useAccountPrivacy()

  const { openResponse, setOpenResponse, clientResponseMessage, snackbarStatus } = useClientResponse(passwordError, setOpenModalDelete, setPublicState, isPublicAccount, setOpenModal)


  const handleModalCloseDelete = () => {
    setOpenModalDelete(false)
  }

  const handleModalOpenDelete = () => {
    setPassword('')
    setPasswordError(false)
    setOpenModalDelete(true)
  }

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant='h5' gutterBottom>
          Account Settings
        </Typography>
        <Divider sx={{ my: 2 }} />

        <UpdateUserAccount />


        <Button variant='outlined' onClick={() => setisPublicAccount(!isPublicAccount)}>
          {isPublicAccount ? 'Make Account Private' : 'Make Account Public'}
        </Button>

        <Button variant='outlined' onClick={handleModalOpenDelete}>
          Delete Account
        </Button>

        <AccountPrivacySwitch
          isPublicAccount={isPublicAccount}
          togglePrivacy={() => setisPublicAccount(!isPublicAccount)}
        />

        <DeleteAccountModal
          open={openModalDelete}
          handleClose={handleModalCloseDelete}
          password={password}
          setPassword={setPassword}
          handleDeleteAccount={handleDeleteAccount}
        />
      </Paper>
      <ResponseBar 
        openResponse={openResponse}
        message={clientResponseMessage}
        setCloseResponse={setOpenResponse}
        snackbarStatus={snackbarStatus}
      />
    </Box>
  )
}

export default Settings
