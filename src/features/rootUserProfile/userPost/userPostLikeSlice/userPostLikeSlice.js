import { createSlice } from "@reduxjs/toolkit"
import { likeUserPostApi } from "./api/likeUserPost"

const initialState = {
    postLike: null,
    likePostStatus: 'idle',
    likePostError: null
}

const userPostLikeSlice = createSlice({
    name: 'postLike',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(likeUserPostApi.pending, (state) => {
                state.likePostStatus = 'loading'
            })
            .addCase(likeUserPostApi.fulfilled, (state, action) => {
                state.likePostStatus = 'completed'
                state.postLike = action.payload
            })
            .addCase(likeUserPostApi.rejected, (state, action) => {
                state.likePostStatus = 'failed'
                state.likePostError = action.payload.message
            })
    }
})

export default userPostLikeSlice.reducer