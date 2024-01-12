import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import'./register.css'
const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit= async (event)=>{
        event.preventDefault();
        try{
            await axios.post("http://localhost:3002/auth/register",
            {username,password,});
            alert("registration success");
        }
        catch (err){
            console.error(err);
        }
    }
  return (
    <div>
<Form onSubmit={handleSubmit}><h2>Registration form</h2>
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
        Register
    </Button>
    </Form>
    </div>
)
}

export default Register