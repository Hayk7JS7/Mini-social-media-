import { updatePost } from "../../../../../utils/api/postRoutes/mutationRoutes/mutationRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../../api/api"

export const updateUserPost = createAsyncThunk(
    'userPost/updateUserPost',
    async (updatePostInfo, { rejectWithValue }) => {
        try {
            const response = await api.put(updatePost(updatePostInfo.id), updatePostInfo.formData, {
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