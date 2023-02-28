import axios from "axios";
import React from "react";
import { useState } from "react";


const LoginResepsionis = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleFormLoginResepsionis = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/hotel/user/resepsionis', {
                email, password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            setMessage('login failed. Please Try Again')
        }
        return (
            <div>

            </div>
        )
    }
}
export default LoginResepsionis