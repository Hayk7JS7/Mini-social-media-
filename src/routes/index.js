import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from '../private/PrivateRoute'
import Home from '../pages/Home/Home'
import Registration from '../pages/Registration/Registration'
import Login from '../pages/Login/Login'
import UserProfile from '../pages/UserProfile/UserProfile'
import UserProfileById from '../pages/UserProfileById/UserProfileById'
import Settings from '../pages/Settings/Settings'
import Friends from '../pages/Friends/Friends'

const AppRoutes = ({ isAuthenticated }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/profile/:id' element={<UserProfileById />} />
        <Route path='/profile/settings' element={<Settings />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/register' element={<Registration />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
