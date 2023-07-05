import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

export const Home = ({user, setToken, setUser, token}) => {

    async function handleUserInfo() {
        let userInfo = await axios.post('http://localhost:3001/profile', {token})
        console.log(userInfo)
        if (userInfo) {
            setUser(userInfo.data)
        }
        return userInfo
    }

    useEffect(() => {
        let existingToken = localStorage.getItem("token")
        if (existingToken) {
            setToken(existingToken)
            handleUserInfo()
        }
    }, [token])

    const profileButton = (
        <Link to="profile">
            <button>Go to profile</button>
        </Link>
    )
    return(
        <>
            <h1>This is home.</h1>
            <h2>{user.name ? user.name : "No one"} is signed in</h2>
            {
                user.name ? profileButton : null
            }
        </>
    )
}