import ProtectedRoute from './routes/ProtectedRoute'
import OpenRoutes from './routes/OpenRoutes'
import useAuth from '../hooks/useAuth'
import NavSpinner from './spinners/NavSpinner'

const Shell = () => {

    const { loggedIn, checkingStatus } = useAuth()

    if (checkingStatus) {
        return <NavSpinner />
    }

    return (
        loggedIn ? <ProtectedRoute /> : <OpenRoutes />
    )
}

export default Shell
