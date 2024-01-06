import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteUserAccountRoute } from "../../../../utils/api/userRoutes/userProfileRoutes/userProfileRoutes"
// import axios from "axios"
import api from "../../../../api/api"

export const deleteUserAccount = createAsyncThunk(
  "userSetting/deleteUserAccount",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.delete(
        deleteUserAccountRoute(userData._id),
        {
          data: { password: userData.password }, 
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        }
      )

      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
