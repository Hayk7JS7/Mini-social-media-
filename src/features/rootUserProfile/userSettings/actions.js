import { createSelector } from '@reduxjs/toolkit'

const selectUserSettingsState = (state) => state.userProfile.userSettings

export const selectUserSettingsProfileDetails = createSelector(
        [selectUserSettingsState],
        (settings) => {
        return {
            updateUserError: settings.updateUserError,
            deleteUserStatus: settings.deleteUserStatus,
            deleteUserError: settings.deleteUserError,
            updateUserPrivacyStatus: settings.updateUserPrivacyStatus,
            updateUserPrivacyMessage: settings.updateUserPrivacyMessage,
            updateUserStatus: settings.updateUserStatus
        }
    }
)
