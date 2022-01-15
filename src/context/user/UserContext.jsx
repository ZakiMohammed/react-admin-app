import { useState, createContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState(null)

    const value = {
        users,
        setUsers,
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
