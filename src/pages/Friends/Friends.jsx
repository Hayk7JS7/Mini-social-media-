import React, { useState } from 'react'
import { Box, Paper, Tab, Tabs } from '@mui/material'
import { useTokenExpired } from '../../hooks/useTokenExpired'
import FriendsTab from './components/FriendsTab'
import MyRequestsFriendsTab from './components/MyRequestsFriendsTab'
import RequestedFriendsTab from './components/RequestedFriendsTab'
import useGetFriendsInfo from '../UserProfileById/Hooks/useGetFriendsInfo'

const Friends = () => {
  // console.log('Friends rendering')
  const [selectedTab, setSelectedTab] = useState(0)

  useTokenExpired()
  useGetFriendsInfo()

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  return (
    <Box>
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Friends" />
          <Tab label="My Requested Friends" />
          <Tab label="Requested Friends" />
        </Tabs>

        {selectedTab === 0 && <FriendsTab />}
        {selectedTab === 1 && <MyRequestsFriendsTab />}
        {selectedTab === 2 && <RequestedFriendsTab />}
      </Paper>
    </Box>
  )
}

export default Friends
