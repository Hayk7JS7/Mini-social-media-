import { createSlice } from "@reduxjs/toolkit";
import { updateUserInfo } from "./api/updateUserInfo";
import { deleteUserAccount } from "./api/deleteUserAccount";
import { updateUserPrivacy } from "./api/updateUserPrivacy";


const initialState = {
    updateUserError: null,
    updateUserStatus: 'idle',
    deleteUserError: null,
    deleteUserStatus: 'idle',
    updateUserPrivacyStatus: 'idle',
    updateUserPrivacyMessage: null

}

const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        makeInitialStateSettings: (state) => {
            state.updateUserError = null
        },
        makeInitialStateDeleteAccount: (state) => {
            state.deleteUserError = null
            state.deleteUserStatus = 'idle'
        },
        makeInitialStateUserPrivacy: (state) => {
            state.updateUserPrivacyMessage = null
            state.updateUserPrivacyStatus = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserInfo.rejected, (state, action) => {
                state.updateUserError = action.payload.message
            })
            .addCase(updateUserInfo.fulfilled, (state) => {
                state.updateUserStatus = true
                state.updateUserError = false
            })
            .addCase(deleteUserAccount.pending, (state) => {
                state.deleteUserStatus = 'pending'
            })
            .addCase(deleteUserAccount.fulfilled, (state) => {
                state.deleteUserStatus = 'completed'
            })
            .addCase(deleteUserAccount.rejected, (state, action) => {
                state.deleteUserStatus = 'failed'
                state.updateUserError = action.payload.message
            })
            .addCase(updateUserPrivacy.fulfilled, (state, action) => {
                state.updateUserPrivacyStatus = 'completed'
                state.updateUserPrivacyMessage = action.payload.message
            })
            .addCase(updateUserPrivacy.rejected, (state, action) => {
                state.updateUserPrivacyStatus = 'failed'
                state.updateUserPrivacyMessage = action.payload.message
            })
    }
})

export const { makeInitialStateSettings, makeInitialStateDeleteAccount, makeInitialStateUserPrivacy } = userSettingsSlice.actions

export default userSettingsSlice.reducer
