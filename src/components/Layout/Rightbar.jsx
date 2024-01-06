import React from "react"
import {
  Box
} from "@mui/material"
import OnlineFriends from "./components/rightbar/OnlineFriends"
import LatestPhotos from "./components/rightbar/LatestPhotos"
import LatestConversations from "./components/rightbar/LatestConversations"


const Rightbar = () => {
  // console.log('Rightbar rendering')
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <OnlineFriends />
        <LatestPhotos />
        <LatestConversations />
      </Box>
    </Box>
  )
}

export default Rightbar
