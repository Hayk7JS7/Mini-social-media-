import { createSelector } from '@reduxjs/toolkit'

const selectCurrentUserFriendsState = (state) => state.rootFriends.currentUserFriend

export const selectCurrentUserFriendsDetails = createSelector(
    [selectCurrentUserFriendsState],
    (selectCurrentUserFriendsState) => {
        return {
            acceptedFriends: selectCurrentUserFriendsState.acceptedFriends,
            requestedFriends: selectCurrentUserFriendsState.requestedFriends,
            suggestFriends: selectCurrentUserFriendsState.suggestFriends,
            myRequests: selectCurrentUserFriendsState.myRequests,
            getUserInfoStatus: selectCurrentUserFriendsState.getUserInfoStatus,
            getUserInfoError: selectCurrentUserFriendsState.getUserInfoError
        }
    }
)