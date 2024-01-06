import { createSlice } from "@reduxjs/toolkit";
import { searchUsername } from "./api/searchUsername";

const initialState = {
    userSearchedArray: null,
    userSearchStatus: 'idle',
    userSearchError: null
}

const searchedUserByNameSlice = createSlice({
    name: 'searchByName',
    initialState,
    reducers: {
        makeInitialStateGlobalSearch: (state) => {
            state.userSearchedArray = null
            state.userSearchStatus = 'idle'
            state.userSearchError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchUsername.pending, (state) => {
                state.userSearchStatus = 'loading'
            })
            .addCase(searchUsername.fulfilled, (state, action) => {
                state.userSearchStatus = 'completed'
                state.userSearchedArray = action.payload
            })
            .addCase(searchUsername.rejected, (state, action) => {
                state.userSearchStatus = 'failed'
                state.userSearchError = action.payload.message
            })
    }
})

export const { makeInitialStateGlobalSearch } = searchedUserByNameSlice.actions

export default searchedUserByNameSlice.reducer