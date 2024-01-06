import { createSlice } from "@reduxjs/toolkit";
import { readSpecificUserPost } from "./api/readSpecificUserPost";

const initialState = {
    userPost: null,
    userPostStatus: 'idle',
    userPostError: null
}

const specificUserPostSlice = createSlice({
    name: 'specificUserPost',
    initialState,
    reducers: {
        makeInitialPostState: (state) => {
            state.userPost = null
            state.userPostStatus = 'idle'
            state.userPostError = null
        }      
    },
    extraReducers: (builder) => {
        builder
            .addCase(readSpecificUserPost.pending, (state) => {
                state.userPostStatus = 'loading'
            })
            .addCase(readSpecificUserPost.fulfilled, (state, action) => {
                state.userPostStatus = 'completed'
                state.userPost = action.payload
            })
            .addCase(readSpecificUserPost.rejected, (state, action) => {
                state.userPostStatus = 'failed'
                state.userPostError = action.payload.message
            })
    }
})

export const { makeInitialPostState } = specificUserPostSlice.actions

export default specificUserPostSlice.reducer