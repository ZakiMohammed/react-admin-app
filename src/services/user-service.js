import axios from 'axios'

const userAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
})

const isAuthenticated = async () => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (auth) {
        // TODO: replace this with actual isAuthenticated api call for token auth
        const response = await userAxios.get(`${auth.id}`)
        if (response.status === 200) {
            const user = response.data

            // setting fake user role
            user.role = user.id % 2 === 0 ? 'admin' : 'user'
            return user
        }
    }
    return null
}

const login = async (username, email) => {
    // TODO: replace this with actual authenticate api call for token generation
    const response = await userAxios.get(`?username=${username}&email=${email}`)
    if (response.status === 200) {
        const users = response.data

        if (users && users.length) {
            const user = users[0]

            // setting fake user role
            user.role = user.id % 2 === 0 ? 'admin' : 'user'

            localStorage.setItem('auth', JSON.stringify(user))
            return user
        }
    }

    return null
}

const logout = async () => {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (auth) {
        // TODO: replace this with actual logout api call for token removal
        await userAxios.get(`${auth.id}`)

        localStorage.removeItem('auth')
    }
}

const userService = {
    isAuthenticated,
    login,
    logout
}

export default userService