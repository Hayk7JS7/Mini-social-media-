import { requestFriends } from "../../../../utils/api/userFriends/userFriends"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const makeFriendRequest = createAsyncThunk(
    'specificUserFriendsSlice/makeFriendRequest',
    async (friendInfo, { rejectWithValue }) => {
        try {
            const response = await api.post(requestFriends(friendInfo.id), friendInfo, {
                // headers: {
                //     "Content-Type": 'application/json',
                //     Authorization: `Bearer ${localStorage.getItem("token")}`
                // }
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)