import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'
import User from '../components/User'

const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <User user={user} />
    )
}

export default Profile
