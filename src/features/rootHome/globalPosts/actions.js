import { createSelector } from '@reduxjs/toolkit'

const selectGlobalPostsState = (state) => state.rootHome.globalPosts

export const selectGlobalPostsDetails = createSelector(
    [selectGlobalPostsState],
    (globalPostsState) => {
        return {
            globalPosts: globalPostsState.globalPosts,
            globalPostError: globalPostsState.globalPostError,
            globalPostStatus: globalPostsState.globalPostStatus
        }
    }
)
