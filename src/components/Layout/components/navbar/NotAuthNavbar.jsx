import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NotAuthNavbar = () => {
  return (
    <>
        <Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Register</Button>
        </Link>
        <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sign in</Button>
        </Link>
    </>
  )
}

export default NotAuthNavbar
