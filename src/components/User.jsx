import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const User = ({ user }) => {
    return (
        <div className='columns'>
            <div className='column is-2'>
                <div className="is-flex is-justify-content-center">
                    <figure className='image is-300x300'>
                        <img className='is-smooth' src={`https://picsum.photos/id/${user.id * 10}/300/300`} alt="Profile" />
                    </figure>
                </div>
            </div>
            <div className="column">
                <div className="box">
                    <table className="table is-fullwidth mb-3">
                        <tbody>
                            <tr>
                                <td className='has-text-weight-bold has-text-grey' colSpan={2}>Account</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={regular('user')} className='has-text-primary pr-2' />User Name</td>
                                <td className='has-text-right has-text-weight-bold'>{user.username}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={regular('face-smile')} className='has-text-primary pr-2' />Full Name</td>
                                <td className='has-text-right has-text-weight-bold'>{user.name}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table is-fullwidth mb-3">
                        <tbody>
                            <tr>
                                <td className='has-text-weight-bold has-text-grey' colSpan={2}>Contact</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={regular('envelope')} className='has-text-primary pr-2' />Email</td>
                                <td className='has-text-right has-text-weight-bold'>{user.email}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={solid('phone')} className='has-text-primary pr-2' />Phone</td>
                                <td className='has-text-right has-text-weight-bold'>{user.phone}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={solid('earth-africa')} className='has-text-primary pr-2' />Site</td>
                                <td className='has-text-right has-text-weight-bold'>{user.website}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table is-fullwidth mb-3">
                        <tbody>
                            <tr>
                                <td className='has-text-weight-bold has-text-grey' colSpan={2}>Address</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={regular('envelope')} className='has-text-primary pr-2' />Street</td>
                                <td className='has-text-right has-text-weight-bold'>{user.address.street}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={solid('phone')} className='has-text-primary pr-2' />City</td>
                                <td className='has-text-right has-text-weight-bold'>{user.address.city}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={solid('earth-africa')} className='has-text-primary pr-2' />Zip Code</td>
                                <td className='has-text-right has-text-weight-bold'>{user.address.zipcode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User
