import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    })
    let navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }
    const submitClick = async () => {
        const { username, password } = userCredentials;
        console.log(username, password)
        axios.post(`http://192.168.0.148:8000/api/v1/login`, { username, password })
            .then(res => {
                if (res.data.status == 200) {
                    localStorage.setItem('token', res.data.data.token);
                    navigate('/');
                    window.location.reload();
                }
            }).catch((err) => console.log(err))
    }
    return (
        <div className="formInput">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <div>
                        <input type="email" name="username" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <input type="password" name="password" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <button className="btn" onClick={submitClick}>Sign In</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Login;