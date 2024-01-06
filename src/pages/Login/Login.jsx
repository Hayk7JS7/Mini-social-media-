import { useDispatch } from 'react-redux'
import {CssBaseline, Box, Container} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { passwordRegex, usernameRegex } from './utils/ValidLogin'
import { userAuthLogin } from '../../features/rootUserAuth/userAuthLogin/api/userAuthLoginThunk'
import { useClientResponse } from './Hooks/useClientResponse'
import ResponseBar from '../../models/clientResponseBar/responseBar'
import LoginForm from './Components/LoginForm'
import LoginFooter from './Components/LoginFooter'
import LoginHeader from './Components/LoginHeader'

const defaultTheme = createTheme()

function Login() {
  // console.log('Login rendering')
  const { handleCloseResponse, openResponse, clientResponseMessage, setOpenResponse, setClientResonseMessage } = useClientResponse()

  const dispatch = useDispatch()

  const handleFormSubmit = (value, setValue) => {
    if(!usernameRegex.test(value.username) || !passwordRegex.test(value.password)) {
      setOpenResponse(true)
      setClientResonseMessage(`${!usernameRegex.test(value.username) ? 'Username' : 'Password'} is incorrect`)
    } else {
      dispatch(userAuthLogin(value))
      setValue({password: '', username: ''})
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginHeader />
          <LoginForm onFormSubmit={handleFormSubmit} />
          <LoginFooter />
        </Box>
      </Container>
      <ResponseBar snackbarStatus={false} message={clientResponseMessage} setCloseResponse={handleCloseResponse} openResponse={openResponse} />
    </ThemeProvider>
  )
}

export default Login
