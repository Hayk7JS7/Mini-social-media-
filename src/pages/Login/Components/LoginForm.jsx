import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { loginInfo } from '../utils/loginInfo'
import FormTextField from '../Models/FormTextField'
import { useState } from 'react'

function LoginForm({ onFormSubmit = () => {} }) {
  const [value, setValue] = useState({
    username:'', password:''
  })

  const onChange = (e) => {
    setValue(pre => {
      return {...pre, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(value, setValue)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {
        loginInfo.map(info => (
          <FormTextField key={info.id} label={info.label} id={info.id} type={info?.type} name={info.name} autoComplete={info.name} value={value} onChange={onChange} />
        ))
      }
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  )
}

export default LoginForm
