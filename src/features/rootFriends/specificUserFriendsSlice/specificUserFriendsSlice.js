import { createSlice } from "@reduxjs/toolkit";
import { getSpecificUserFriends } from "./api/getSpecificUserFriends";

const initialState = {
    specificFriends: [],
    acceptedFriendsStatus: 'idle',
    acceptedFriendsError: null
}

const specificUserFriendsSlice = createSlice({
    name: 'specificUserFriend',
    initialState,
    reducers: {
        makeInitialSpecificUser: (state) => {
            state.specificFriends = []
            state.acceptedFriendsStatus = 'idle'
            state.acceptedFriendsError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSpecificUserFriends.pending, (state) => {
                state.acceptedFriendsStatus = 'loading'
            })
            .addCase(getSpecificUserFriends.fulfilled, (state, action) => {
                state.specificFriends = action.payload
                state.acceptedFriendsStatus = 'completed'
            })
            .addCase(getSpecificUserFriends.rejected, (state, action) => {
                state.acceptedFriendsError = action.payload
            })
    }
})

export const { makeInitialSpecificUser } = specificUserFriendsSlice.actions

export default specificUserFriendsSlice.reducer