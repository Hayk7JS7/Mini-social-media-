import { createSelector } from "@reduxjs/toolkit"

const selectUserPostDeleteState = (state) => state.userProfile.rootUserPost.userPostDelete

export const selectUserPostDetails = createSelector(
    [selectUserPostDeleteState],
    (selectUserPostDeleteState) => {
        return {
            deleteError: selectUserPostDeleteState.deleteError,
            deleteStatus: selectUserPostDeleteState.deleteStatus 
         }
        }
    )
