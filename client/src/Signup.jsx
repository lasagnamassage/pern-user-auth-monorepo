import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', firstname: '', lastname: '' });
  const navigate = useNavigate()

  const handleSignup = async (event) => {
    event.preventDefault();
    let post = await axios.post('http://localhost:3001/signup', formData)
    if (post.status === 200) {
        alert('Registered user! Log in please')
        navigate('/login')
        return
    }
    alert('Error when registering user!')
    return
  }
  
  return (
    <>
      <h1>This is signup</h1>
      <form onSubmit={handleSignup}>
      <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={formData.firstname}
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value})}
        />
        <br />
        <br />
      <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value})}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value})}></input>
        <br />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
