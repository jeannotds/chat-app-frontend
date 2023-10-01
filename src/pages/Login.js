import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react";
import "../styles/login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ user, setUser }) => {

  let navigate = useNavigate();
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existDate, setExistDate] = useState("");
  
  const  handleLogin = async(e) => {
    e.preventDefault();

    if(email && password) {
      await axios({
        method: "POST",
        headers: {'X-Custom-Header': 'foobar'},
        url: 'http://localhost:8001/api/auth/login',
        data: { password, email},
      })
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res.data));
        localStorage.setItem('token', JSON.stringify(res.token));
        console.log('res : ', res.data);
        navigate("./chat");
      }).catch((err) => {
          const axiosError = err;
          const response = axiosError.response;
          const responseData = response.data;
          const message = responseData.message;
          setExistDate(message);
        });
      }

    };

    console.log(existDate);
    
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form onSubmit={handleLogin}>
            <h1 className="tetxt-center">Create account</h1>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
              />
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
  );
};

export default Login;