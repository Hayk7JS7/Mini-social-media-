import { acceptFriends } from "../../../../utils/api/userFriends/userFriends"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const acceptFriendship = createAsyncThunk(
    'specificUserFriendsSlice/acceptFriendship',
    async (friendInfo, { rejectWithValue }) => {
        try {
            const response = await api.post(acceptFriends(friendInfo.id), friendInfo, {
                // headers: {
                    // "Content-Type": 'application/json',
                    // Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
