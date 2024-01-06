import { createSelector } from '@reduxjs/toolkit'

const selectUserSearchByNameState = (state) => state.rootHome.rootGlobalSearch.searchByName

export const selectGlobalSearchByNameDetails = createSelector(
    [selectUserSearchByNameState],
    (selectUserSearchByNameState) => {
        return {
            userSearchedArray: selectUserSearchByNameState.userSearchedArray,
            userSearchStatus: selectUserSearchByNameState.userSearchStatus,
            userSearchError: selectUserSearchByNameState.userSearchError
        }
    }
)
