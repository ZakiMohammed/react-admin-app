import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'
import userService from '../../services/user-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Spinner from '../../components/spinners/Spinner'
import User from '../../components/User'

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
            const found = users.find(i => i.id === +params.id)
            found ? setUser(found) : getUser()
        }

    }, [users, params.id])

    return (
        <>
            {
                loading ? <Spinner /> : (
                    user && <User user={user} />
                )
            }
            <NavLink to={'/users'} className='button is-light'>
                <FontAwesomeIcon icon={solid('arrow-left')} className='has-text-grey' />
            </NavLink>
        </>
    )
}

export default UserPage
