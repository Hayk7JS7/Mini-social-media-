import { FIND_USER_BY_TOKEN } from "../../../../utils/api/userRoutes/userAuthRoutes/userAuth"
import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../../../api/api"

export const findUserByToken = createAsyncThunk(
    'userRefresh/token',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.post(FIND_USER_BY_TOKEN)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)