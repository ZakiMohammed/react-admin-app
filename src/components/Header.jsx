import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <b>Admin App</b>
                </Link>

                <a role="button" className={'navbar-burger burger ' + (isActive ? 'is-active': '')} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setIsActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + (isActive ? 'is-active': '')}>
                <div className="navbar-start">
                    <Link className="navbar-item" to={'/'}>Dashboard</Link>
                    <Link className="navbar-item" to={'/profile'}>Profile</Link>
                    <Link className="navbar-item" to={'/users'}>Users</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
