import React from 'react'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav } from 'react-bootstrap';
import "./css.css"
import {AiOutlineHome,AiOutlineLogin} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';

function Navbarx(props){
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <img
            alt=""
            src="https://cdn0.iconfinder.com/data/icons/business-man-color-v2/512/business_international_man_world_global-512.png"
            // src="https://th.bing.com/th/id/R.3608866a9f2cea329729acfde8a10310?rik=SVbC9TYluSmGVA&pid=ImgRaw&r=0"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to ={"/"}></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to ={"/"} ><AiOutlineHome className='AiOutlineHome'/>Home</Nav.Link>
            <Nav.Link  as={Link} to ={"/student"}>Student</Nav.Link>
            <Nav.Link  as={Link} to ={"/teacher"}>Teacher</Nav.Link>
            {/* <Nav.Link  as={Link} to ={"/manageruser"}>Manager User</Nav.Link> */}
            <Nav.Link  as={Link} to ={"/about"}>About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  as={Link} to ={"/login"}><AiOutlineLogin className='AiOutlineLogin'/>Login</Nav.Link>
            <Nav.Link  as={Link} to ={"/register"}><BsPencilSquare className='BsPencilSquare'/>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='footer'>
      {props.children}
    </div>
  </>
    
  );
}

export default Navbarx;