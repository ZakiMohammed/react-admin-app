import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'
import userService from '../../services/user-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Spinner from '../../components/spinners/Spinner'

const UserPage = () => {

    const { users } = useContext(UserContext)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const params = useParams()

    useEffect(() => {
        const getUser = async () => {
            try {
                setLoading(true)

                const data = await userService.getUser(params.id)

                setUser(data)

            } catch (error) {
                console.log('Error Occurred', error);
            } finally {
                setLoading(false)
            }
        }

        if (!users) {
            getUser()
        } else {
            const found = users.find(i => i.id === params.id)
            if (found) {
                setUser(found)
            } else {
                getUser()
            }
        }

    }, [])

    return (
        <div>
            User Page
        </div>
    )
}

export default UserPage
