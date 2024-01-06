import { createSlice } from "@reduxjs/toolkit";
import { readGlobalPosts } from "./api/readGlobalPosts";

const initialState = {
    globalPosts: null,
    globalPostError: null,
    globalPostStatus: 'idle'
}

const globalPostsSlice = createSlice({
    name: 'globalPosts',
    initialState,
    reducers: {
        makeInitialGlobalSearch: (state) => {
            state.globalPosts = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readGlobalPosts.pending, (state) => {
                state.globalPostStatus = 'loading'
            })
            .addCase(readGlobalPosts.fulfilled, (state, action) => {
                state.globalPostStatus = 'completed'
                state.globalPosts = action.payload
            })
            .addCase(readGlobalPosts.rejected, (state, action) => {
                state.globalPostStatus = 'failed'
                state.globalPostError = action.payload.message
            })
    }
})

export const { makeInitialGlobalState } = globalPostsSlice.actions

export default globalPostsSlice.reducer