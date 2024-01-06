import { GET_USER_BY_ID } from "../../../../../utils/api/userRoutes/userUsersRoutes/userUsersRoutes"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../../api/api"

export const getUserById = createAsyncThunk(
    'searchById/getUserById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.get(GET_USER_BY_ID(id), {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem('token')}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
