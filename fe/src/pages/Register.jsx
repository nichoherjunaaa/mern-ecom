import React, { useState } from 'react'
import axios from '../config/axiosConfig'
const Register = () => {

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/register', form)
            console.log(response);
            setStatus('Registered successfully')
        } catch (error) {
            console.log(error.message);
            setStatus('Failed to register')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" onChange={handleChange} placeholder='firstname' />
                <input type="text" name="lastname" onChange={handleChange} placeholder='lastname' />
                <input type="text" name="email" onChange={handleChange} placeholder='email' />
                <input type="text" name="mobile" onChange={handleChange} placeholder='mobile' />
                <input type="password" name="password" onChange={handleChange} placeholder='password' />
                <button type="submit">Register</button>
                <p>{status}</p>
            </form>
        </>
    )
}

export default Register
