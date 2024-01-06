import { useEffect, useState } from 'react'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectloginDetails } from './features/rootUserAuth/userAuthLogin/selectors'
import { setIsValidToken, setAccessToken } from './features/rootUserAuth/userAuthToken/userAuthTokenSlice'
import { selectAuthTokenDetails } from './features/rootUserAuth/userAuthToken/selectors'
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Rightbar from './components/Layout/Rightbar'
import checkToken from './hooks/useCheckToken'
import useFetchUserProfileOnMount from './pages/UserProfile/Hooks/useFetchUserProfileOnMount'
import AppRoutes from './routes'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { userLoged } = useSelector(selectloginDetails)
  const { isValidToken } = useSelector(selectAuthTokenDetails)

  const isAuthenticated = checkToken()
  useFetchUserProfileOnMount()

  const [mode, setMode] = useState('light')
  const [isAuth, setIsAuth] = useState(isAuthenticated)

  useEffect(() => {
    const isAuth = checkToken()
    setIsAuth(isAuth)
  }, [])

  useEffect(() => {
    const validToken = checkToken()
    if(validToken) {
      const token = localStorage.getItem('token')
      dispatch(setAccessToken(token))
      setIsAuth(true)
    } else {
      setMode('light')
      setIsAuth(false)
      dispatch(setIsValidToken(false))
    }
  }, [userLoged, isValidToken, dispatch])

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'} className='App'>
        <Router>
          <Navbar />
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            {isAuth ? <Sidebar setMode={setMode} mode={mode}/> : null}
            <Box flexGrow={1}>
              <AppRoutes isAuthenticated={isAuth} />
            </Box>
            {isAuth ? <Rightbar /> : null}
          </Stack>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App
