import { useDispatch, useSelector } from "react-redux"
import { selectUserSettingsProfileDetails } from "../../../features/rootUserProfile/userSettings/actions"
import { useState, useEffect } from "react"
import { makeUpdateIntial } from "../../../features/rootUserProfile/userProfile/userProfileSlice"
import { makeInitialStateSettings, makeInitialStateUserPrivacy } from "../../../features/rootUserProfile/userSettings/userSettingsSlice"
import { selectUserProfileDetails } from "../../../features/rootUserProfile/userProfile/actions"

export const useClientResponse = (passwordError, setOpenModalDelete, setPublicState, isPublicAccount, setOpenModal) => {
    const dispatch = useDispatch()
    const { deleteUserError, updateUserError, updateUserPrivacyMessage, updateUserPrivacyStatus } = useSelector(selectUserSettingsProfileDetails)
    const {  updateUserStatus } = useSelector(selectUserProfileDetails)

    const [openResponse, setOpenResponse] = useState(false)
    const [clientResponseMessage, setClientResonseMessage] = useState('')    
    const [snackbarStatus, setSnackbarStatus] = useState(null)

    useEffect(() => {
        if (updateUserStatus !== 'idle' && !updateUserError) {
          setSnackbarStatus(true)
          setClientResonseMessage('Changes saved successfully!')
          setOpenResponse(true)
        }
        if (updateUserError) {
          setSnackbarStatus(false)
          setClientResonseMessage(`Error: ${updateUserError}`)
          setOpenResponse(true)
        }

        if(deleteUserError) {
          setOpenModalDelete(false)
          setSnackbarStatus(false)
          setClientResonseMessage(`Error: ${deleteUserError}`)
          setOpenResponse(true)
        }
    
        if(updateUserPrivacyStatus === 'completed') {
          dispatch(setPublicState(isPublicAccount))
          setSnackbarStatus(true)
          setClientResonseMessage(`${updateUserPrivacyMessage}`)
          setOpenResponse(true)
        }
    
        if(updateUserPrivacyStatus === 'failed') {
          setSnackbarStatus(false)
          setClientResonseMessage(`Error: ${updateUserPrivacyMessage}`)
          setOpenResponse(true)
        }

        return () => {
          dispatch(makeUpdateIntial())
          dispatch(makeInitialStateUserPrivacy())
          dispatch(makeInitialStateSettings())
          setOpenModal(false)
          setOpenModalDelete(false)
        }
      }, [updateUserError, updateUserStatus, deleteUserError, updateUserPrivacyMessage, updateUserPrivacyStatus, dispatch])

      useEffect(() => {
        if(passwordError) {
          setOpenModalDelete(false)
          setSnackbarStatus(false)
          setClientResonseMessage(`Error: Invalid Password`)
          setOpenResponse(true)
        } 
      }, [passwordError, setOpenModalDelete, setSnackbarStatus, setClientResonseMessage, setOpenResponse])
    
      return { openResponse, setOpenResponse, clientResponseMessage, snackbarStatus }
}

