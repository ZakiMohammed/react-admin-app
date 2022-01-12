import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import OpenRoutes from './components/OpenRoutes'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import UserListPage from './pages/users/UserListPage'
import UserPage from './pages/users/UserPage'
import ForgotPassword from './pages/ForgotPassword'
import Register from './pages/Register'

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					
					{/* private routes */}
					<Route path='/' element={<PrivateRoute />}>
						<Route path='/' element={<Outlet />}>
							<Route path='/' element={<Dashboard />} />
							<Route path='/profile' element={<Profile />} />
							<Route path='/users' element={<UserListPage />} />
							<Route path='/users/:id' element={<UserPage />} />
						</Route>
					</Route>

					{/* open routes */}
					<Route path='/' element={<OpenRoutes />}>
						<Route path='/' element={<Outlet />}>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/forgot-password' element={<ForgotPassword />} />
						</Route>
					</Route>
					
					<Route path='/*' element={<NoMatch />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
