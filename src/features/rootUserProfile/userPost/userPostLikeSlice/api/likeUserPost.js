import { createAsyncThunk } from "@reduxjs/toolkit"
import { likeUserPost } from "../../../../../utils/api/postRoutes/mutationRoutes/mutationRoutes"
import api from "../../../../../api/api"
// import axios from "axios"

export const likeUserPostApi = createAsyncThunk(
    'userPost/postLike',
    async (postInfo, { rejectWithValue }) => {
        try {
            const response = await api.put(likeUserPost(postInfo.id), postInfo, {
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