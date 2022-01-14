import { useState, createContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const [user, setUser] = useState(null)

    const value = {
        loggedIn,
        setLoggedIn,
        checkingStatus,
        setCheckingStatus,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
