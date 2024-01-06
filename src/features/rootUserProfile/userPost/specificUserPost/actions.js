import { createSelector } from "@reduxjs/toolkit"

const selectSpecificUserPostCreateState = (state) => state.userProfile.rootUserPost.specificUserPost

export const selectSpecificUserPostCreateDetails = createSelector(
    [selectSpecificUserPostCreateState],
    (selectSpecificUserPostCreateState) => {
        return {
            userPost: selectSpecificUserPostCreateState.userPost,
            userPostStatus: selectSpecificUserPostCreateState.userPostStatus,
            userPostError: selectSpecificUserPostCreateState.userPostError
         }
        }
    )
