import { useState, useEffect } from 'react'
import axios from 'axios'

export const Profile = ({token, user, setUser, setToken}) => {

    async function handleUserInfo() {
        console.log('token value clientside is:', token)
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

    return (
        <>
            <h1>Hello, {user.name ? user.name : "Stranger"}</h1>
        </>
    )
}