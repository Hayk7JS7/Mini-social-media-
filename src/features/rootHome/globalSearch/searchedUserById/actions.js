import { createSelector } from '@reduxjs/toolkit'

const selectUserSearchByIdState = (state) => state.rootHome.rootGlobalSearch.searchById

export const selectGlobalSearchByIdDetails = createSelector(
    [selectUserSearchByIdState],
    (selectUserSearchByIdState) => {
        return {
            userSearched: selectUserSearchByIdState.userSearched,
            searchedByIdStatus: selectUserSearchByIdState.searchedByIdStatus,
            searchByIdError: selectUserSearchByIdState.searchByIdError
        }
    }
)
