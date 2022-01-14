import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext'

const Header = () => {

    const { user } = useContext(AuthContext)
    const [isActive, setIsActive] = useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <b>Admin App</b>
                </Link>

                <button className={'navbar-burger burger ' + (isActive ? 'is-active': '')} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + (isActive ? 'is-active': '')}>
                <div className="navbar-start">
                    <Link className="navbar-item" to={'/'}>Dashboard</Link>
                    <Link className="navbar-item" to={'/profile'}>Profile</Link>
                    {
                        user && user.role === 'admin' && <Link className="navbar-item" to={'/users'}>Users</Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
