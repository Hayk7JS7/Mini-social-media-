import { createSlice } from '@reduxjs/toolkit'
import { updateUserAvatar } from './api/updateUserAvatar'
import { findUserByToken } from '../../rootUserAuth/userAuthToken/api/findUserByToken'
import { updateUserInfo } from '../userSettings/api/updateUserInfo'

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
    accessToken: '',
    createdAt: '',
    avatar: '',
    publicStatus: null,
    updateUserStatus: 'idle',
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        getUserInfo: (state, action) => {
            const {username, firstName, lastName, email, _id, createdAt, avatar, publicStatus} = action.payload.user
            state.username = username
            state.firstName = firstName
            state.lastName = lastName
            state.email = email
            state._id = _id
            state.createdAt = createdAt
            state.avatar = avatar
            state.publicStatus = publicStatus
            state.accessToken = action.payload.accessToken
        },
        setTempAvatar: (state, action) => {
            state.avatar = action.payload
        },
        makeUpdateIntial: (state) => {
            state.updateUserStatus = 'idle'
        },
        makeInitialProfile: (state) => {
            state.username =  ''
            state.firstName =  ''
            state.lastName =  ''
            state.email =  ''
            state._id =  ''
            state.accessToken =  ''
            state.createdAt =  ''
            state.avatar =  ''
            state.publicStatus = null
            state.updateUserStatus =  'idle'
        },
        setPublicState: (state, action) => {
            state.publicStatus = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserAvatar.pending, (state) => {

            })
            .addCase(updateUserAvatar.fulfilled, (state, action) => {
                state.avatar = action.payload.avatar
            })
            .addCase(updateUserAvatar.rejected, (state) => {

            })
            .addCase(findUserByToken.fulfilled, (state, action) => {
                const {username, firstName, lastName, email, _id, createdAt, avatar, publicStatus} = action.payload.user
                state.username = username
                state.firstName = firstName
                state.lastName = lastName
                state.email = email
                state._id = _id
                state.createdAt = createdAt
                state.avatar = avatar
                state.publicStatus = publicStatus
            })
            .addCase(updateUserInfo.fulfilled, (state, action) => {
                const {username, firstName, lastName, email, _id, createdAt, avatar, publicStatus} = action.payload.user
                state.username = username
                state.firstName = firstName
                state.lastName = lastName
                state.email = email
                state._id = _id
                state.createdAt = createdAt
                state.avatar = avatar
                state.updateUserStatus = 'completed'
                state.publicStatus = publicStatus
            })
    }
})

export const { getUserInfo, setTempAvatar, makeUpdateIntial, makeInitialProfile, setPublicState } = userProfileSlice.actions

export default userProfileSlice.reducer
