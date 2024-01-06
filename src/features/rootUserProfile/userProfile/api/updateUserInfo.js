import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { updateUser } from "../../../../utils/api/userRoutes/userProfileRoutes/userProfileRoutes"

export const updateUserInfo = createAsyncThunk(
    'userPost/updateUserInfo',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(updateUser(formData.get('userId')), formData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)