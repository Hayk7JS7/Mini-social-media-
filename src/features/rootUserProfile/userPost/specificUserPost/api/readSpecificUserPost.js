import { getSearchedUserAllPosts } from "../../../../../utils/api/postRoutes/retrievalRoutes/retrievalRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../../api/api"

export const readSpecificUserPost = createAsyncThunk(
    'userPost/readSpecificUserPost',
    async (userInfo, { rejectWithValue }) => {
        try {
            const response = await api.get(getSearchedUserAllPosts(userInfo._id, userInfo.searchedUser), {
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