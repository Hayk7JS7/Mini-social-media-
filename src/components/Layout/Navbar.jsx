import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectAuthTokenDetails } from '../../features/rootUserAuth/userAuthToken/selectors'
import { AppBar, Box, IconButton, Typography, Menu, MenuItem } from '@mui/material'
import { StyledToolbar } from '../../styles/layouts/NavbarStyles'
import useFetchUsername from '../hooks/useFetchUsername'
import useLogout from '../../hooks/useLogout'
import NotAuthNavbar from './components/navbar/NotAuthNavbar'
import AuthNavbar from './components/navbar/AuthNavbar'
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility'

const Navbar = () => {
  // console.log('Navbar rendering')
  const { isValidToken } = useSelector(selectAuthTokenDetails)
  const [isAuthenticated, setIsAuthenticated] = useState(isValidToken)
  const { searchUserName, setSearchUserName } = useFetchUsername()
  const [logout, setLogout] = useState('')

  useLogout({ logoutDependency: logout })

  useEffect(() => {    
    if (isValidToken) {
      setIsAuthenticated(true)
    } else {
      setLogout('')
      setIsAuthenticated(false)
    }
  }, [isValidToken, isAuthenticated])

  const [anchorEl, setAnchorEl] = useState(null) 
  const navigate = useNavigate()


  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget) 
  }

  const handleCloseMenu = () => {
    setAnchorEl(null) 
    setLogout('completed')
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" component={Link} to='/'>
          <SettingsAccessibilityIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: { xs: 1, lg: 1 } }}>
          FriendSpace
        </Typography>

        <Box sx={{ display: { sm: 'inherit', lg: 'flex' }, justifyContent: { lg: 'space-evenly' }, gap: { lg: '70px' }, width: { lg: '80%' } }}>
          { !isAuthenticated ? <NotAuthNavbar /> : <AuthNavbar searchUserName={searchUserName} setSearchUserName={setSearchUserName} handleAvatarClick={handleAvatarClick} />}
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)} 
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => {navigate('/profile'); handleCloseMenu()}}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
