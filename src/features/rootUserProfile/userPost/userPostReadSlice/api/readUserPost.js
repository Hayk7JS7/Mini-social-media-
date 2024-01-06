import { getUserAllPosts } from "../../../../../utils/api/postRoutes/retrievalRoutes/retrievalRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../../api/api"

export const readUserPost = createAsyncThunk(
    'userPost/readUserPost',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await api.get(getUserAllPosts(userId), {
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