import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import userService from '../services/user-service'

const Login = () => {

    // setting up bg color to light
    document.querySelector('html').classList.add('has-background-light')
    document.querySelector('body').classList.add('has-background-light')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const user = await userService.login(userName, password)
            if (user) {
                window.location = '/'
            } else {
                alert('Invalid Credentials')
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-image is-hidden-desktop">
                    <figure className="image is-4by3">
                        <img src="https://picsum.photos/600/700" alt="Random" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <div className="columns py-5">
                            <div className="column is-hidden-touch">
                                <figure className='image'>
                                    <img className='is-smooth' src="https://picsum.photos/600/800" alt="Random" />
                                </figure>
                            </div>
                            <div className="column">
                                <h6 className='has-text-grey-light mb-6'>
                                    Welcome to <b className='has-text-primary'>React Admin App</b>
                                </h6>
                                <h2 className='mb-5'>
                                    <b>Hey, <br /> Login Now.</b>
                                </h2>

                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <p className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={regular('user')} className='has-text-primary' />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <span className="icon is-small is-left">
                                                <FontAwesomeIcon icon={solid('lock')} className='has-text-primary' />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field mt-5">
                                        <p className="control">
                                            <button className="button is-primary is-fullwidth" disabled={!userName || !password}>
                                                Login
                                            </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
