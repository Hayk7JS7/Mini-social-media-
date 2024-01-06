import { CREATE_POST } from "../../../../../utils/api/postRoutes/mutationRoutes/mutationRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../../api/api"

export const createUserPost = createAsyncThunk(
    'userPost/createUserPost',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await api.post(CREATE_POST, formData, {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
