import { getAllPosts } from "../../../../utils/api/postRoutes/retrievalRoutes/retrievalRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../../../api/api"

export const readGlobalPosts = createAsyncThunk(
    'globalPosts/readGlobalPosts',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await api.get(getAllPosts(userId))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)