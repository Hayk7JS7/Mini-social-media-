import { USER_REFRESH_ROUTE } from "../../../../utils/api/userRoutes/userAuthRoutes/userAuth"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const userRefresh = createAsyncThunk(
    'userRefresh/token',
    async (token, { rejectWithValue }) => {
        try {
            const response = await api.post(USER_REFRESH_ROUTE, {}, {
                // headers: {
                //     "authorization": `Bearer ${token}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)