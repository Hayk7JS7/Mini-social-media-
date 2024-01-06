import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { passwordRegex } from "../../Registration/utils/registrationRegex"
import { deleteUserAccount } from "../../../features/rootUserProfile/userSettings/api/deleteUserAccount"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"

const useDeleteProfile = () => {
  const { _id } = useSelector(selectUserProfileDetails)
  const dispatch = useDispatch()

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const [openModalDelete, setOpenModalDelete] = useState(false)

  const handleDeleteAccount = () => {
    if(password === '') return 
    if(passwordRegex.test(password)) {
      const userData = {
        _id,
        password
      }
      dispatch(deleteUserAccount(userData))
    } else {
      setPasswordError(true)
    }
  }

  return {
    passwordError,
    setPasswordError,
    password,
    setPassword,
    openModalDelete,
    setOpenModalDelete,
    handleDeleteAccount,
  }
}

export default useDeleteProfile
