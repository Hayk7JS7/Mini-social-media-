import { createSelector } from "@reduxjs/toolkit"

const selectUserPostCreateState = (state) => state.userProfile.rootUserPost.userPostCreate

export const selectUserPostCreateDetails = createSelector(
    [selectUserPostCreateState],
    (selectUserPostCreateState) => {
        return {
            createStatus: selectUserPostCreateState.createStatus,
            createError: selectUserPostCreateState.createError
         }
        }
    )
