import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const Header = () => {

    const { user } = useContext(AuthContext)
    const [isActive, setIsActive] = useState(false)

    const doLogout = () => {
        localStorage.removeItem('auth')
        window.location = '/'
    }

    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <b className='has-text-primary'>React Admin App</b>
                </Link>

                <button className={'navbar-burger burger ' + (isActive ? 'is-active' : '')} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + (isActive ? 'is-active' : '')}>
                <div className="navbar-end">
                    <div className='navbar-item'>
                        <span className={`tag is-capitalized ${user.role === 'admin' ? 'is-dark' : 'is-primary'}`}>{user.role}</span>
                    </div>
                    <Link className="navbar-item" to={'/'}>Dashboard</Link>
                    <Link className="navbar-item" to={'/profile'}>Profile</Link>
                    {
                        user && user.role === 'admin' && <Link className="navbar-item" to={'/users'}>Users</Link>
                    }
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <button className='button is-primary is-outlined' onClick={doLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
