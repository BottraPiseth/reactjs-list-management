import React from 'react'
import "./css/login.css"
import {Link} from "react-router-dom";
import { Container, Button, Form, Col, Row,Nav } from 'react-bootstrap'
import {useNavigate}from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  //btncreate
  function onClickCreate (){
    navigate("/register")
  }
  return (
    <>
      <Container>
        <div className='container square-box d-flex justify-content-center '>
          <Form  className='col-md-5 mx-auto text-center' >
          <h2 >Login</h2>
              <Form.Group as={Row} className=" mb-3" >
                    <Col sm="12">
                    <Form.Control type="telephone" placeholder="Enter Telephone" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className=" mb-5">
                    <Col sm="12">
                    <Form.Control type="Password" placeholder="Enter Password" required />
                    </Col>
                </Form.Group>
                <div className="d-grid gap-1">
                    <Button variant="dark" size="mb">
                    Log in
                    </Button>
                    <Form.Group as={Row} className=" mb-3" >
                        <Col sm="12">
                        <Form.Label column sm="5" >Forget Password?</Form.Label>
                        </Col>
                    </Form.Group>
                    <Button onClick={onClickCreate} variant="dark" size="mb"> 
                         Create Account
                    </Button>
                    
                 </div>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Login