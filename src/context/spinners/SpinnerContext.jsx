import { useState, createContext } from 'react'

const SpinnerContext = createContext()

export const SpinnerProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const value = {
        loading,
        setLoading
    }

    return (
        <SpinnerContext.Provider value={value}>
            {children}
        </SpinnerContext.Provider>
    )
}

export default SpinnerContext
