import { createSlice } from '@reduxjs/toolkit'
import { readUserPost } from './api/readUserPost'

const initialState = {
    readStatus: 'idle',
    readError: null,
}

const userPostReadSlice = createSlice({
    name: 'userPostRead',
    initialState,
    reducers: {
        resetReadSlice: (state) => {
            state.readStatus = "idle"
            state.readError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readUserPost.pending, (state) => {
                state.readStatus = 'pending'
                state.readError = null
            })
            // .addCase(readUserPost.fulfilled, (state) => {
            //     state.readStatus = 'completed'
            // })
            .addCase(readUserPost.rejected, (state, action) => {
                state.readStatus = 'failed'
                state.readError = action.payload.message
            })
    }
})

export const { resetReadSlice } = userPostReadSlice.actions

export default userPostReadSlice.reducer