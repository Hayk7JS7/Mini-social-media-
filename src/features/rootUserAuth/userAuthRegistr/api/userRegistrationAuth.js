import { createAsyncThunk } from "@reduxjs/toolkit"
import { USER_REGISTER_ROUTE } from "../../../../utils/api/userRoutes/userAuthRoutes/userAuth"
// import axios from "axios"
import api from "../../../../api/api"

// preversion /users/register
export const userRegistrationAuth = createAsyncThunk(
    'userAuthRegister/register',
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await api.post(USER_REGISTER_ROUTE, JSON.stringify(userInfo), {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data.error)
        }
    }
)