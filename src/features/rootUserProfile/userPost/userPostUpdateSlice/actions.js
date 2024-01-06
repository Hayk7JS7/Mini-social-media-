import { createSelector } from "@reduxjs/toolkit"

const selectUserPostUpdateState = (state) => state.userProfile.rootUserPost.userPostUpdate

export const selectUserPostUpdateDetails = createSelector(
    [selectUserPostUpdateState],
    (selectUserPostUpdateState) => {
        return {
            updateError: selectUserPostUpdateState.updateError,
            updateStatus: selectUserPostUpdateState.updateStatus
         }
        }
    )
