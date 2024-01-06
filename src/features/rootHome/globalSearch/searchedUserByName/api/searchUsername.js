import api from "../../../../../api/api"
import { GET_USER_LIST_BY_NAME } from "../../../../../utils/api/userRoutes/userUsersRoutes/userUsersRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

export const searchUsername = createAsyncThunk(
    'searchByName/searchUsername',
    async (username, { rejectWithValue }) => {
        try {
            const response = await api.get(GET_USER_LIST_BY_NAME(username), {
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