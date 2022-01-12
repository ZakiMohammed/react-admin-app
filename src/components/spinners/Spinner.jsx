import { useContext } from 'react'
import { FaSpinner } from 'react-icons/fa'
import SpinnerContext from '../../context/spinners/SpinnerContext'

const Spinner = () => {
    const { loading } = useContext(SpinnerContext)

    return (
        loading &&
        <>
            <FaSpinner size={60} />
        </>
    )
}

export default Spinner
