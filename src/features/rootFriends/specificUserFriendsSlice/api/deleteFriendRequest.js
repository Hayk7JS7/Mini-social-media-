import { removeRequestedFriends } from "../../../../utils/api/userFriends/userFriends"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
import api from "../../../../api/api"

export const deleteFriendRequest = createAsyncThunk(
    'specificUserFriendsSlice/deleteFriendRequest',
    async (friendInfo, { rejectWithValue }) => {
        try {
            const response = await api.delete(removeRequestedFriends(friendInfo.id), {
                data: friendInfo, 
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
