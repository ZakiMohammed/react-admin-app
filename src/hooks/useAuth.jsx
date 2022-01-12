import { useEffect, useState, useRef } from 'react'
import userService from '../services/user-service'

const useAuth = () => {

    const isMounted = useRef()
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        const authenticate = async () => {
            if (isMounted) {
                const user = await userService.authenticate()
                if (user) {
                    setLoggedIn(true)
                }
                setCheckingStatus(false)
            }
        }

        authenticate()

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    return { loggedIn, checkingStatus }
}

export default useAuth
