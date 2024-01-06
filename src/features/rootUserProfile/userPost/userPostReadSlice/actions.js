import { createSelector } from "@reduxjs/toolkit"

const selectUserPostReadState = (state) => state.userProfile.rootUserPost.userPostRead

export const selectUserPostReadDetails = createSelector(
    [selectUserPostReadState],
    (selectUserPostReadState) => {
            return {
                readStatus: selectUserPostReadState.readStatus,
                readError: selectUserPostReadState.readError
            }
        }
    )
