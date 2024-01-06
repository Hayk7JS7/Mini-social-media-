import { createSlice } from '@reduxjs/toolkit'
import { userRegistrationAuth } from './api/userRegistrationAuth'

const initialState = {
    userRegistr: false,
    userRegistrPending: null,
    userRegistrRejection: false,
}

const userAuthRegisterSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        makeInitialRegistr: (state) => {
            state.userRegistr = false
            state.userRegistrPending = null
            state.userRegistrRejection = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegistrationAuth.pending, (state) => {
                state.userRegistr = false
                state.userRegistrPending = true
                state.userRegistrRejection = false
            })
            .addCase(userRegistrationAuth.fulfilled, (state, action) => {
                state.userRegistr = action.payload
                state.userRegistrPending = false
                state.userRegistrRejection = false
            })
            .addCase(userRegistrationAuth.rejected, (state, action) => {
                state.userRegistr = false
                state.userRegistrPending = null
                state.userRegistrRejection = action.payload
            })     
    }
})

export const { makeInitialRegistr } = userAuthRegisterSlice.actions 

export default userAuthRegisterSlice.reducer