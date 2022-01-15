import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'
import userService from '../../services/user-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Spinner from '../../components/spinners/Spinner'

const Users = () => {

    const { users, setUsers } = useContext(UserContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)

                const data = await userService.getUsers()

                setUsers(data)

            } catch (error) {
                console.log('Error Occurred', error);
            } finally {
                setLoading(false)
            }
        }

        if (!users) {
            getUsers()
        }

    }, [users, setUsers])

    return (
        <div className='box'>
            {
                loading ? <Spinner /> : (
                    <table className='table is-fullwidth'>
                        <tbody>
                            {users && users.map(user => (
                                <tr key={user.id}>
                                    <td>
                                        <div className='is-flex is-align-items-center'>
                                            <figure className='image is-32x32'>
                                                <img className='is-rounded' src={`http://picsum.photos/id/${user.id * 10}/32/32`} alt="User" />
                                            </figure>
                                            <span className='pl-2'>{user.name}</span>
                                        </div>
                                    </td>
                                    <td className='has-text-right'>
                                        <NavLink to={'/users/' + user.id} className='button is-light'>
                                            <FontAwesomeIcon icon={solid('arrow-right')} className='has-text-grey' />
                                        </NavLink>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    )
}

export default Users
