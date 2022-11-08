import { Button, Row, Form, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import Bot from "../images/bot.jpeg";
import { useState } from "react";
import axios from "axios";
import React from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Image upload state
  const [image, setImage] = useState(null);
  const [uploadImg, setUploadImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "yp1zbtgx");
    try {
      setUploadImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dwxnmwhdl/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setUploadImg(false);
      return urlData.url;
    } catch (error) {
      setUploadImg(false);
      console.log(error);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    console.log(url);

    // Signup the user
    axios
      .post("http://localhost:3005/auth/signup", {
        name,
        email,
        password,
        picture: url,
      })
      .then((data) => {
        console.log("Data", data);
        alert("Data save!!!!!!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form onSubmit={handleSignup}>
            <h1 className="tetxt-center">Create account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || Bot}
                className="signup-profile-pic"
                alt="img"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon plus">+</i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
              />
            </Form.Group>
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
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              {/* Create acoount */}
              {uploadImg ? "Signing you..." : "Signup"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have account ? <Link to="/">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
