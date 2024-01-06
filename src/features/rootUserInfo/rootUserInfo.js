import { combineReducers } from "@reduxjs/toolkit";
import latestPhotosReducer from "./latestPhotosSlice/latestPhotosSlice";

const rootUserInfo = combineReducers({
    latestPhotos: latestPhotosReducer
})

// Reducer

export default rootUserInfo