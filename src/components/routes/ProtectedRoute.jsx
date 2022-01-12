import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Profile from '../../pages/Profile'
import UserListPage from '../../pages/users/UserListPage'
import UserPage from '../../pages/users/UserPage'
import NoMatchInner from '../../pages/NoMatchInner'
import Header from '../Header'
import Footer from '../Footer'

const ProtectedRoute = () => {
    return (
        <>
            <Header />

            <div className="section">
                <Routes>
                    <Route path='/' element={<Outlet />}>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/users' element={<UserListPage />} />
                        <Route path='/users/:id' element={<UserPage />} />

                        {/* force redirect */}
                        <Route path='/dashboard' element={<Navigate replace to='/' />} />
                        <Route path='/login' element={<Navigate replace to='/' />} />
                        <Route path='/register' element={<Navigate replace to='/' />} />
                        <Route path='/forgot-password' element={<Navigate replace to='/' />} />

                        <Route path='*' element={<NoMatchInner />} />
                    </Route>
                </Routes>
            </div>

            <Footer />
        </>
    )
}

export default ProtectedRoute
