import { createSlice } from '@reduxjs/toolkit'
import { userAuthLogin } from './api/userAuthLoginThunk'

const initialState = {
    accessToken: null,
    userLoged: false,
    userLogedPending: null,
    userLogedRejection: false
}

const userAuthLoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        makeInitialLoged: (state) => {
            state.userLoged = false
            state.userLogedPending = null
            state.userLogedRejection = false
            state.accessToken = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userAuthLogin.pending, (state) => {
                state.userLoged = false
                state.userLogedPending = true
                state.userLogedRejection = false
            })
            .addCase(userAuthLogin.fulfilled, (state, action) => {
                state.userLoged = action.payload
                state.userLogedPending = false
                state.userLogedRejection = false
                state.accessToken = action.payload.accessToken
            })
            .addCase(userAuthLogin.rejected, (state, action) => {
                state.userLoged = false
                state.userLogedPending = null
                state.userLogedRejection = action.payload
                state.accessToken = null
            })
            
    }
})

export const { makeInitialLoged } = userAuthLoginSlice.actions 

export default userAuthLoginSlice.reducer