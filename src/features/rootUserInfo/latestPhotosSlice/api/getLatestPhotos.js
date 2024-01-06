import { getLatestPhotosUrl } from "../../../../utils/api/userInfo/rightBarUtils"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const getLatestPhotos = createAsyncThunk(
    'latestPhotos/getLatestPhotos',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await api.get(getLatestPhotosUrl(userId), {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
