import { Outlet, Navigate } from "react-router-dom"

function PrivateRoutes({ isAuthenticated }) {
    return (
        isAuthenticated ? <Outlet />  : <Navigate to="/login" />
    )
}

export default PrivateRoutes