import { Button } from '@mui/material'
import DeleteAccountModal from '../models/DeleteAccountModal'
import useDeleteProfile from '../utils/useDeleteProfile'

const DeleteAccount = () => {
    const { setPasswordError, password, setPassword, openModalDelete, setOpenModalDelete, handleDeleteAccount } = useDeleteProfile()

    const handleModalOpenDelete = () => {
        setPassword('')
        setPasswordError(false)
        setOpenModalDelete(true)
    }
    
    const handleModalCloseDelete = () => {
        setOpenModalDelete(false)
    }
  return (
    <>
        <Button variant='outlined' onClick={handleModalOpenDelete}>
          Delete Account
        </Button>

        <DeleteAccountModal
          open={openModalDelete}
          handleClose={handleModalCloseDelete}
          password={password}
          setPassword={setPassword}
          handleDeleteAccount={handleDeleteAccount}
        />
    </>
  )
}

export default DeleteAccount
