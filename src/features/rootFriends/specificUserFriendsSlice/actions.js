import { createSelector } from '@reduxjs/toolkit'

const selectSpecificUserFriendState = (state) => state.rootFriends.specificUserFriend

export const selectSpecificUserFriendDetails = createSelector(
    [selectSpecificUserFriendState],
    (selectSpecificUserFriendState) => {
        return {
            specificFriends: selectSpecificUserFriendState.specificFriends,
            acceptedFriendsStatus: selectSpecificUserFriendState.acceptedFriendsStatus,
            acceptedFriendsError: selectSpecificUserFriendState.acceptedFriendsError
        }
    }
)
