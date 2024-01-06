import api from "../../../../api/api"
import { updateUserPrivac } from "../../../../utils/api/userRoutes/userProfileRoutes/userProfileRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

export const updateUserPrivacy = createAsyncThunk(
    'userPost/updateUserInfo',
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await api.put(updateUserPrivac(userInfo._id), userInfo, {
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