import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const getTitle = (pathname) => {
    switch (pathname) {
        case '/profile':
            return 'Profile'
        case '/users':
            return 'User List'
        default:

            if (pathname.includes('/users/')) {
                return 'User Details'
            }

            return ''
    }
}

const PageTitle = () => {

    const location = useLocation()
    const [title, setTitle] = useState('')

    useEffect(() => setTitle(getTitle(location.pathname)), [location])

    return (
        !title ? '' :
            <div className='pb-2 mb-4'>
                <div className="content">
                    <h4 className='has-text-grey'>{title}</h4>
                </div>
            </div>
    )
}

export default PageTitle
