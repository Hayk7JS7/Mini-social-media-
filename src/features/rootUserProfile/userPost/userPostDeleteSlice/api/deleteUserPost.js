import { createAsyncThunk } from "@reduxjs/toolkit"
import { deletePost } from "../../../../../utils/api/postRoutes/mutationRoutes/mutationRoutes"
// import axios from "axios"
import api from "../../../../../api/api"

export const deleteUserPost = createAsyncThunk(
    'userPost/deleteUserPost',
    async (postInfo, { rejectWithValue }) => {
        try {
            const response = await api.delete(deletePost(postInfo.id), { 
                data: { imageUrl: postInfo.imageUrl },
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