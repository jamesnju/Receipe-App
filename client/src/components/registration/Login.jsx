import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import'./register.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:3002/auth/login",
            {username, password,});
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID)
            navigate("/")
        }catch(err){    
            console.error(err);
        }
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}><h2>Login form</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <label htmlFor="username"><p>Username</p>
            <input type="text" 
            id='username'
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}
            />
        </label>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <label htmlFor="password"><p>Password</p>
            <input type="password" 
            id='username'
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            />
        </label>
        </Form.Group>
    <Button variant="primary" type="submit">
        Login
    </Button>
    </Form>
    
    </div>
  )
}

export default Login