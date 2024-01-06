import { getUserAllFriends } from "../../../../utils/api/userFriends/userFriends"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const getUserFriendsInfo = createAsyncThunk(
    'currentUserFriendsSlice/getUserFriendsInfo',
    async (_id, { rejectWithValue }) => {
        try {
            const response = await api.get(getUserAllFriends(_id), {
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)