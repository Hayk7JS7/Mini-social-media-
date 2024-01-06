import { createSelector } from "@reduxjs/toolkit"

const selectUserPostsState = (state) => state.userProfile.rootUserPost.userPosts

export const selectUserPostsDetails = createSelector(
    [selectUserPostsState],
    (selectUserPostsState) => {
        return {
            posts: selectUserPostsState.posts
         }
        }
    )
