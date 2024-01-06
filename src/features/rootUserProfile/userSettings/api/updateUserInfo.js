import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateUser } from "../../../../utils/api/userRoutes/userProfileRoutes/userProfileRoutes"
// import axios from "axios"
import api from "../../../../api/api"

export const updateUserInfo = createAsyncThunk(
    'userSetting/updateUserInfo',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.put(updateUser(formData.get('userId')), formData, {
                // headers: {
                //     'Content-Type': 'application/json',
                //     Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })

            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)