import api from "../../../../api/api"
import { getSpecificUserAllFriends } from "../../../../utils/api/userFriends/userFriends"
import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

export const getSpecificUserFriends = createAsyncThunk(
    'currentUserFriendsSlice/getSpecificUserFriends',
    async (getInfo, { rejectWithValue }) => {
        try {
            const response = await api.get(getSpecificUserAllFriends(getInfo.searchedUserId, getInfo.userId), {
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