import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const OpenRoutes = () => {

    const { loggedIn } = useAuth()

    return (
        loggedIn ? <Navigate to='/' /> : <Outlet />
    )
}

export default OpenRoutes
