import { createSlice } from '@reduxjs/toolkit'
import { updateUserPost } from './api/updateUserPost'

const initialState = {
    updateStatus: 'idle',
    updateError: null,
}

const userPostUpdateSlice = createSlice({
    name: 'userPostUpdate',
    initialState,
    reducers: {
        reserUpdateState: (state) => {
            state.updateStatus = 'idle'
            state.updateError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserPost.pending, (state) => {
                state.updateStatus='pending'
                state.updateError = null
            })
            // .addCase(updateUserPost.fulfilled, (state) => {
            //     state.updateStatus = 'completed'
            //     state.updateError = null
            // })
            .addCase(updateUserPost.rejected, (state, action) => {
                state.updateError = action.payload.message
                state.updateStatus = 'failed'
            })
    }
})

export const { reserUpdateState } = userPostUpdateSlice.actions

export default userPostUpdateSlice.reducer