import React from 'react'
import { Container, Button, Form, Col, Row } from 'react-bootstrap'


function Register() {
  return (
    <>
       <Container>
        <div className='container square-box d-flex justify-content-center '>
          <Form  className='col-md-5 mx-auto text-center' >
          <h2 >Register</h2>
              <Row className="mb-3">
                  <Form.Group as={Col} > 
                    <Form.Control  type="firstname" placeholder="Firstname*" />
                  </Form.Group>
                  <Form.Group as={Col} >
                    <Form.Control type="lastname" placeholder="Lastname*" />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email*" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="bod" placeholder="mm/dd/yyyy*" />
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>Available country</Form.Label>
                    <Form.Select defaultValue="Available country">
                      <option>Cambodia</option>     
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                  <Form.Label >City/Province</Form.Label>
                    <Form.Select defaultValue="Choose...">
                 
                      <option>City/Province</option>
                      <option>Phnom Penh</option>
                      <option>Kompong Cham</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                
                <div className="d-grid gap-1">
                    <Button variant="dark" size="mb">
                    Create Account
                    </Button>
                 </div>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Register