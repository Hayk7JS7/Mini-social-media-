import { createSelector } from "@reduxjs/toolkit"


const registerState = (state) => state.userAuth.register

export const selectRegisterDetails = createSelector(
    [registerState],
    (registerState) => {
        return {
            userRegistr: registerState.userRegistr,
            userRegistrPending: registerState.userRegistrPending,
            userRegistrRejection: registerState.userRegistrRejection,
            accessToken: registerState.accessToken            
        }
    }
)