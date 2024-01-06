import { createSlice } from "@reduxjs/toolkit";
import { getUserFriendsInfo } from "./api/getUserFriendsInfo";
import { acceptFriendship } from "./api/acceptFrienship";

const initialState = {
    acceptedFriends: [],
    requestedFriends: [],
    myRequests: [],
    suggestFriends: [],
    getUserInfoStatus: 'idle',
    getUserInfoError: null
}

const currentUserFriendsSlice = createSlice({
    name: 'currentUserFriend',
    initialState,
    reducers: {
        makeInitialCurrentUserFriend: (state) => {
            state.acceptedFriends = []
            state.requestedFriends = []
            state.suggestFriends = []
            state.myRequests = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserFriendsInfo.pending, (state) => {
                state.getUserInfoStatus = 'loading'
            })
            .addCase(getUserFriendsInfo.fulfilled, (state, action) => {
                state.getUserInfoStatus = 'completed'
                state.acceptedFriends = action.payload.acceptedFriends
                state.requestedFriends = action.payload.requestedFriends
                state.myRequests = action.payload.myRequests
            })
            .addCase(getUserFriendsInfo.rejected, (state, action) => {
                state.getUserInfoStatus = 'loading'
                state.getUserInfoError = action.payload
            })
            .addCase(acceptFriendship.pending, (state) => {

            })
            .addCase(acceptFriendship.fulfilled, (state, action) => {
                state.acceptedFriends = action.payload.data.acceptedFriends
                state.myRequests = action.payload.data.myRequests
                state.requestedFriends = action.payload.data.requestedFriends
            })
            .addCase(acceptFriendship.rejected, (state) => {

            })            
    }
})

export const { makeInitialCurrentUserFriend } = currentUserFriendsSlice.actions

export default currentUserFriendsSlice.reducer