import { createSelector } from '@reduxjs/toolkit'

const selectUserProfileState = (state) => state.userProfile.userProfile

export const selectUserProfileDetails = createSelector(
        [selectUserProfileState],
        (profile) => {
        return {
            username: profile.username,
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            _id: profile._id,
            accessToken: profile.accessToken,
            createdAt: profile.createdAt,
            avatar: profile.avatar,
            updateUserStatus: profile.updateUserStatus,
            publicStatus: profile.publicStatus,
        }
    }
)
