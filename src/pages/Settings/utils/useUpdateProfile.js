import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { emailRegex, nameLastnameRegex, usernameRegex } from "../../Registration/utils/registrationRegex"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"
import { updateUserInfo } from "../../../features/rootUserProfile/userProfile/api/updateUserInfo"
import { selectUserSettingsProfileDetails } from "../../../features/rootUserProfile/userSettings/actions"

const useUpdateProfile = () => {
  const dispatch = useDispatch()
  const { firstName, lastName, email, username, _id, updateUserStatus } = useSelector(selectUserProfileDetails)
  const { updateUserError } = useSelector(selectUserSettingsProfileDetails)

  const [userData, setUserData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
  })

  useEffect(() => {
    if(!_id)return
    setUserData({
      firstName,
      lastName,
      email,
      username
    })
  }, [firstName, lastName, email, username, _id])

  useEffect(() => {
    if(updateUserError) {
      setUserData({
        lastName,
        firstName,
        email,
        username
      })
    }
  }, [updateUserError])

  const [openModal, setOpenModal] = useState(false)

  const handleSaveChanges = () => {
    if (!usernameRegex.test(userData.username) || !emailRegex.test(userData.email) || !nameLastnameRegex.test(userData.firstName) || !nameLastnameRegex.test(userData.lastName)) return
    if (firstName === userData.firstName && lastName === userData.lastName && email === userData.email && username === userData.username) return
    const formData = new FormData()
    if (firstName !== userData.firstName) {
      formData.append('firstName', userData.firstName)
    }
    if (lastName !== userData.lastName) {
      formData.append('lastName', userData.lastName)
    }
    if (email !== userData.email) {
      formData.append('email', userData.email)
    }
    if (username !== userData.username) {
      formData.append('username', userData.username)
    }
    formData.append('userId', _id)
    dispatch(updateUserInfo(formData))
    setOpenModal(false)
  }

  return {
    userData,
    setUserData,
    openModal,
    setOpenModal,
    handleSaveChanges,
    updateUserError,
    updateUserStatus
  }
}

export default useUpdateProfile
