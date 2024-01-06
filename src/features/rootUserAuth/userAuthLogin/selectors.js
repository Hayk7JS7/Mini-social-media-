import { createSelector } from '@reduxjs/toolkit'

const selectLoginState = (state) => state.userAuth.login

export const selectloginDetails = createSelector(
    [selectLoginState],
    (loginState) => {
        return {
            userLoged: loginState.userLoged,
            userLogedPending: loginState.userLogedPending,
            userLogedRejection: loginState.userLogedRejection,
            accessLoginToken: loginState.accessToken
        }
    }
)
