import { createSlice } from '@reduxjs/toolkit'
import { userRefresh } from './api/userRefreshToken'

const initialState = {
    refreshStatus: 'idle',
    refreshResult: null,
    token: null,
    isValidToken: null
}

const userAuthTokenSlice = createSlice({
    name: 'userAuthToken',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.isValidToken = true
            state.token = action.payload
        },
        setIsValidToken: (state, action) => {
            state.isValidToken = action.payload
        },
        makeInitialAuthToken: (state) => {
            state.isValidToken = null
            state.token = null
            state.refreshStatus = 'idle'
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRefresh.pending, (state) => {
                state.refreshStatus = 'pending'
            })
            .addCase(userRefresh.fulfilled, (state, action) => {
                state.refreshStatus = 'completed'
                state.refreshResult = action.payload
            })
            .addCase(userRefresh.rejected, (state, action) => {
                state.refreshStatus = 'rejected'
                state.refreshResult = action.payload.message
            })
    }
})

export const { setAccessToken, setIsValidToken, makeInitialAuthToken } = userAuthTokenSlice.actions

export default userAuthTokenSlice.reducer
