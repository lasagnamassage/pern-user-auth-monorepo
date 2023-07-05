import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export const Login = ({setToken, setUser}) => {
    const [formData, setFormData] = useState({ email: '', password: ''})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let post = await axios.post('http://localhost:3001/login', formData)
        if (post.error) {
            alert('login not accepted')
        } else {
            localStorage.setItem("token", post.data.token)
            console.log('token below!')
            console.log(post.data.token)
            setToken(post.data.token)
            navigate('/profile')
        }   
    }

    return (
        <>
            <h1>This is login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <br/><br/>
                <label htmlFor="email">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value})} />
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}