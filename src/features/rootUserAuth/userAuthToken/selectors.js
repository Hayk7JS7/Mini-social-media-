import { createSelector } from "@reduxjs/toolkit"


const authTokenState = (state) => state.userAuth.token

export const selectAuthTokenDetails = createSelector(
    [authTokenState],
    (authTokenState) => {
        return {
            token: authTokenState.token,
            refreshResult: authTokenState.refreshResult,
            refreshStatus: authTokenState.refreshStatus,
            isValidToken: authTokenState.isValidToken
        }
    }
)