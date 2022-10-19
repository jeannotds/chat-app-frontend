import { Button,  Row, Form, Col, Container } from "react-bootstrap"

import '../styles/login.css'
import { useState } from "react";
import { useEffect } from 'react';
import axios  from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Login = () => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:3005/api/auth/protected', {
            headers : {
                Authorization: token
            }
        }).then(res => {
            console.log(res)
            navigate('/chat')
        }).catch(err => {
            console.log(err)
            navigate('/')
        })
    },[])
   
    const submit = (e) => {
        e.preventDefault()
        console.log(email, password)
        axios.post("http://localhost:3005/api/auth/login", {email, password})
        .then(user => {
            console.log(user)
            localStorage.setItem("token", user.data.token)
            navigate('/chat')
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <Container> 
        <Row>
            <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                <Form onSubmit={submit}>
                    <h1 className="tetxt-center">Create account</h1>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Se connecter
                    </Button>
                    <div className="py-4">
                        <p className="text-center">
                           As-tu deja un compte ? <Link to="/signup">Login</Link>
                        </p>
                    </div>
                </Form>
            </Col>
            <Col md={5} className="signup__bg"></Col>
        </Row>
    </Container>
    )
}

export default Login


        //     <form>
        //       <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        //       <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        //       <button onClick={submit}>login</button>
        //   </form>