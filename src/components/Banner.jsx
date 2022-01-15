import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'

const Banner = () => {

    const { user } = useContext(AuthContext)

    return (
        <section className="hero is-light is-medium">
            <div className="hero-body">
                <p className="subtitle has-text-grey">Hey, <i>{user.name}</i>!</p>
                <p className="title">
                    Welcome to <b className='has-text-primary'>React Admin App</b>
                </p>
                <p className="subtitle">
                    It covers your routing needs
                </p>
            </div>
        </section>
    )
}

export default Banner
