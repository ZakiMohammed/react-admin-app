import Shell from './components/Shell'
import { AuthProvider } from './context/auth/AuthContext'

const App = () => {
	return (
		<>
			<AuthProvider>
				<Shell />
			</AuthProvider>
		</>
	)
}

export default App
