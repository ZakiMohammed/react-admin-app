import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import ForgotPassword from '../../pages/ForgotPassword'

const OpenRoutes = () => {
    return (
        <div className='section'>
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <Routes>
                        <Route path='/' element={<Outlet />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/forgot-password' element={<ForgotPassword />} />
                            <Route path='/' element={<Navigate replace to='/login' />} />
                            <Route path='*' element={<Navigate replace to='/login' />} />

                            {/* <Route path='*' element={<NoMatch />} /> */}
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default OpenRoutes
