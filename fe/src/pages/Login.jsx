import React, { useState } from 'react'
import axios from '../config/axiosConfig'
const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', form)
            console.log(response);
            setStatus(`Login Successfully as ${response.data.firstname}`)
        } catch (error) {
            console.log(error.message);
            setStatus('Failed to Login')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleChange} placeholder='email' />
                <input type="password" name="password" onChange={handleChange} placeholder='password' />
                <button type="submit">Login</button>
                <p>{status}</p>
            </form>
        </>
    )
}

export default Login
