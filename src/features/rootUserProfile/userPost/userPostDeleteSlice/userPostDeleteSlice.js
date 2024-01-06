import { createSlice } from '@reduxjs/toolkit'
import { deleteUserPost } from './api/deleteUserPost'

const initialState = {
    deleteStatus: 'idle',
    deleteError: null,
}

const userPostDeleteSlice = createSlice({
    name: 'userPostDelete',
    initialState,
    reducers: {
        resetDeleteState: (state) => {
            state.deleteStatus = 'idle'
            state.deleteError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteUserPost.pending, (state) => {
                state.deleteStatus = "pending"
                state.deleteError = null
            })
            // .addCase(deleteUserPost.pending, (state) => {
            //     state.deleteStatus = "completed"
            //     state.deleteError = null
            // })
            .addCase(deleteUserPost.rejected, (state, action) => {
                state.deleteStatus = "failed"
                state.deleteError = action.payload.message
            })
    }
})

export const { resetDeleteState } = userPostDeleteSlice.actions

export default userPostDeleteSlice.reducer