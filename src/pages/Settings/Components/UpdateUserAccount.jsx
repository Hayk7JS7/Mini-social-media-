import { Button } from '@mui/material'
import UpdateUserProfileModal from '../models/UpdateUserProfileModal'
import useUpdateProfile from '../utils/useUpdateProfile'

const UpdateUserAccount = () => {
    const { userData, setUserData, openModal, setOpenModal, handleSaveChanges } = useUpdateProfile()

    const handleModalOpen = () => {
        setOpenModal(true)
    }
    
    const handleModalClose = () => {
        setOpenModal(false)
    }

  return (
    <>
        <Button variant='outlined' onClick={handleModalOpen}>
            Change User Profile
        </Button>

        <UpdateUserProfileModal
          open={openModal}
          handleClose={handleModalClose}
          userData={userData}
          setUserData={setUserData}
          handleSaveChanges={handleSaveChanges}
        />
    </>
  )
}

export default UpdateUserAccount
