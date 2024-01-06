import { createSelector } from '@reduxjs/toolkit'

const selectLatestPhotosState = (state) => state.rootUserInfo.latestPhotos

export const selectLatestPhotosDetails = createSelector(
    [selectLatestPhotosState],
    (selectLatestPhotosState) => {
        return {
            photos: selectLatestPhotosState.photos,
            photosError: selectLatestPhotosState.photosError,
            photosStatus: selectLatestPhotosState.photosStatus
        }
    }
)
