import axios from 'axios'

const userAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/'
})

const authenticate = async () => {
    const auth = localStorage.getItem('auth')
    if (auth) {
        const user = JSON.parse(auth)
        const response = await userAxios.get(`${user.id}`)
        return response.data
    } else {
        return null
    }
}

const userService = {
    authenticate
}

export default userService