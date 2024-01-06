import { createSelector } from "@reduxjs/toolkit"

const selectUserPostLikeState = (state) => state.userProfile.rootUserPost.userPostDelete

export const selectUserPostDetails = createSelector(
    [selectUserPostLikeState],
    (selectUserPostLikeState) => {
        return {
            postLike: selectUserPostLikeState.postLike,
         }
        }
    )
