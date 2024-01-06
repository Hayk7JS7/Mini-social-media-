import { createSlice } from '@reduxjs/toolkit'
import { createUserPost } from './api/createUserPost'

const initialState = {
    createStatus: 'idle',
    createError: null
}

const userPostCreateSlice = createSlice({
    name: 'userPostCreate',
    initialState,
    reducers: {
        resetCretatePostState: (state) => {
            state.createStatus = 'idle'
            state.createError = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserPost.pending, (state) => {
                state.createStatus = 'pending'
                state.createError = null
            })
            // .addCase(createUserPost.fulfilled, (state) => {
            //     state.createStatus = 'completed'
            //     state.createError = null
            // })
            .addCase(createUserPost.rejected, (state, action) => {
                state.createStatus = 'failed'
                state.createStatus = action.payload.message
            })
            .addMatcher(
                (action) => action.type === `${createUserPost.fulfilled}`,
                (state) => {
                    state.createStatus = 'completed'
                    state.createError = null
                }
            )
    }
})

export const { resetCretatePostState } = userPostCreateSlice.actions

export default userPostCreateSlice.reducer