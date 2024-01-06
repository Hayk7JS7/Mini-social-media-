import api from "../../../../api/api"
import { updateAvatar } from "../../../../utils/api/userRoutes/userProfileRoutes/userProfileRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

export const updateUserAvatar = createAsyncThunk(
    'userPost/updateAvatar',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.patch(updateAvatar(formData.get('userId')), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
