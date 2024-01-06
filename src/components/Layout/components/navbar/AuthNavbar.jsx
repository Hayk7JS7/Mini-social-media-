import React, { useEffect, useState } from 'react'
import { Icons, Search, SearchIconWrapper, StyledInputBase, UserBox } from '../../../../styles/layouts/NavbarStyles'
import SearchIcon from '@mui/icons-material/Search'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchList from '../../../../models/userSearchList/SearchList'
import { selectGlobalSearchByNameDetails } from '../../../../features/rootHome/globalSearch/searchedUserByName/actions'
import { useSelector } from 'react-redux'
import { Avatar, Badge, Box, Typography } from '@mui/material'
import { selectUserProfileDetails } from '../../../../features/rootUserProfile/userProfile/actions'

const AuthNavbar = ({searchUserName, setSearchUserName, handleAvatarClick}) => {
    const { userSearchStatus } = useSelector(selectGlobalSearchByNameDetails)
    const { username, avatar } = useSelector(selectUserProfileDetails)
    const [imageUrl, setImageUrl] = useState(avatar)

    useEffect(() => {
        setImageUrl(avatar)
    }, [avatar, imageUrl])
  return (
    <>
        <Search sx={{ maxHeight: '40px', textAlign: 'center' }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    value={searchUserName}
                    onChange={(e) => setSearchUserName(e.target.value)}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
        </Search>

        {searchUserName && userSearchStatus === 'completed' && <SearchList setSearchUserName={setSearchUserName} />}

        <>
            <Box sx={{ marginLeft: '5rem' }}>
            <Icons>
                <Badge badgeContent={0} color="error" sx={{ cursor: 'pointer' }}>
                <MailIcon />
                </Badge>
                <Badge badgeContent={0} color="error" sx={{ cursor: 'pointer' }}>
                <NotificationsIcon />
                </Badge>
                <Avatar
                sx={{ width: 40, height: 40, cursor: 'pointer' }}
                src={imageUrl}
                onClick={handleAvatarClick} 
                />
            </Icons>
            <UserBox onClick={handleAvatarClick}>
                <Avatar
                    sx={{ width: 40, height: 40, cursor: 'pointer' }}
                    src={imageUrl}
                />
                <Typography variant="body1">{username}</Typography>
            </UserBox>
            </Box>
        </>
    </>
  )
}

export default AuthNavbar
