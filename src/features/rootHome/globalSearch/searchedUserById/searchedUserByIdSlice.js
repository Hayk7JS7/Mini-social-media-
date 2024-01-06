import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./api/getUserById";

const initialState = {
    userSearched: null,
    searchByIdError: null,
    searchedByIdStatus: 'idle'
}

const searchedUserByIdSlice = createSlice({
    name: 'searchById',
    initialState,
    reducers: {
        makeInitialState: (state) => {
            state.userSearched = null
            state.searchByIdError = null
            state.searchedByIdStatus = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserById.pending, (state) => {
                state.searchedByIdStatus = 'loading'
            })
            .addCase(getUserById.fulfilled, (state, action) => {
                state.searchedByIdStatus = 'completed'
                state.userSearched = action.payload
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.searchedByIdStatus = 'failed'
                state.searchByIdError = action.payload.message
            })
    }
})

export const { makeInitialState } = searchedUserByIdSlice.actions

export default searchedUserByIdSlice.reducer