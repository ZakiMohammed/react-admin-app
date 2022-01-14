import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import OpenRoutes from './routes/OpenRoutes'
import useAuth from '../hooks/useAuth'
import NavSpinner from './spinners/NavSpinner'
import AuthContext from '../context/auth/AuthContext'

const Shell = () => {

    const { loggedIn, checkingStatus } = useContext(AuthContext)

    useAuth()

    return (
        <Router>
            {
                checkingStatus ? <NavSpinner /> :
                    loggedIn ? <ProtectedRoute /> : <OpenRoutes />
            }
        </Router>
    )
}

export default Shell
