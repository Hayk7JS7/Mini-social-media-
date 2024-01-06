import { createSlice } from "@reduxjs/toolkit";
import { getLatestPhotos } from "./api/getLatestPhotos";

const initialState = {
    photos: [],
    photosError: null,
    photosStatus: 'idle'
}

const latestPhotosSlice = createSlice({
    name: 'latestPhotos',
    initialState,
    reducers: {
        makeInitialStateLatestPhotos: (state) => {
            state.photos = []
            state.photosError = null
            state.photosStatus = 'idle'        
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLatestPhotos.pending, (state) => {
                state.photosStatus = 'loading'
            })
            .addCase(getLatestPhotos.fulfilled, (state, action) => {
                state.photosStatus = 'completed'
                state.photos = action.payload
            })
            .addCase(getLatestPhotos.rejected, (state, action) => {
                state.photosStatus = 'failed'
                state.photosError = action.payload.message
            })
    }
})

export const { makeInitialStateLatestPhotos } = latestPhotosSlice.actions

export default latestPhotosSlice.reducer