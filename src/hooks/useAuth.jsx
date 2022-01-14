import { useEffect, useContext, useRef } from 'react'
import userService from '../services/user-service'
import AuthContext from '../context/auth/AuthContext'

const useAuth = () => {

    const isMounted = useRef()
    const { 
        setLoggedIn,
        setCheckingStatus,
        setUser
     } = useContext(AuthContext)

    useEffect(() => {
        const isAuthenticated = async () => {
            if (isMounted) {
                const user = await userService.isAuthenticated()
                if (user) {
                    setLoggedIn(true)
                    setUser(user)
                }
                setCheckingStatus(false)
            }
        }

        isAuthenticated()

        return () => {
            isMounted.current = false
        }
    }, [isMounted, setLoggedIn, setCheckingStatus, setUser])

    return {}
}

export default useAuth
