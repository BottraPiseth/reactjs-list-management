import React from 'react'
import "./css/studentcreate.css"
import{useState} from'react'
import axios from "axios";
import { Container, Button, Form, Stack, Col, Row } from 'react-bootstrap'
import {useNavigate,useParams} from 'react-router-dom'


const StudentCreate = () => {

   //usestate
   const [firstname, setFirstname] = useState("")
   const [lastname, setLastname] = useState("")
   const [gen, setGen] = useState(0)
   const [tel, setTel] = useState("")
   const [email, setEmail] = useState("")
   const [des, setDes] = useState("")
 
  //event
  const onChangeFname = (event)=> {
    // console.log(event.target.value)
    setFirstname(event.target.value)
  }
  const onChangeLname = (event)=> {
    setLastname(event.target.value)
  }
  const onChangeGen=(event)=>{
    setGen(event.target.value)
  }
  const onChangeTel=(event)=>{
    setTel(event.target.value)
  }
  const onChangeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const onChangeDes=(event)=>{
    setDes(event.target.value)
  }
  //link
  const navigate = useNavigate();
  //param
  const param = useParams();
 //btnSave
 function onClickSave () {
      axios({
              url: "https://nodejs-course-g2.vercel.app/api/student",
              method: "POST",
              data: {  
                "firstname": firstname,
                "lastname": lastname,
                "gender": gen,
                "tel": tel,
                "email": email,
                "description": des            
              },
              header: {}, 
            }).then((res) => {
              var data = res.data;
              // console.log(data);
              navigate("/student")
            }).catch(err=>{
              console.log(err)
            })
    }
 //btnSaveNew 
    function onClickSaveNew (){
      axios({
        url: "https://nodejs-course-g2.vercel.app/api/student",
        method: "POST",
        data: {  
          "firstname": firstname,
          "lastname": lastname,
          "gender": gen,
          "tel": tel,
          "email": email,
          "description": des            
        },
        header: {}, 
      }).then((res) => {
        var data = res.data;
              setFirstname("");
              setLastname("");
              setGen(0);
              setTel("");
              setEmail("");
              setDes("");
      }).catch(err=>{
        console.log(err)
      })
    }
  //btnBack
  function handleBack () {
        navigate("/student")
  }
  return (
    <>
    <Container className='Container'>
      <div className='container square-box d-flex justify-content-center text-center'>
          <Form  className='col-lg-10 col-md-10 mx-auto'>
            <h3>Form Student Create </h3>
            <Stack gap={3} >
            <Form.Group as={Row} className=" mb-3" >
                  <Form.Label column sm="2" >Firstname</Form.Label>
                  <Col sm="10">
                    <Form.Control value={firstname} onChange={onChangeFname} type="text" placeholder="Firstname*" />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
                  <Form.Label column sm="2">Lastname</Form.Label>
                  <Col sm="10">
                   <Form.Control value={lastname} onChange={onChangeLname} type="text" placeholder="Lastname*" required />
                  </Col>
             </Form.Group>
             <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                  <Form.Label column sm="2">Gender</Form.Label>
                  <Col sm="10">
                        <Form.Select value={gen} onChange={onChangeGen} aria-label="Default select example" required > 
                          <option value="0">Female</option>
                          <option value="1">Male</option>
                          <option value="2">Other</option>
                        </Form.Select>
                  </Col>
             </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextTelephone">
                  <Form.Label column sm="2">Telephone</Form.Label>
                  <Col sm="10">
                  <Form.Control value={tel} onChange={onChangeTel} type="text" placeholder="Telephone*" required />
                  </Col>
             </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column sm="2">Email Address</Form.Label>
                  <Col sm="10">
                  <Form.Control value={email} onChange={onChangeEmail} type="text" placeholder="Email*" required/>
                  </Col>
             </Form.Group>
             <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                  <Form.Label column sm="2">Description</Form.Label>
                  <Col sm="10"> 
                        <Form.Control value={des} onChange={onChangeDes} as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}  /> 
                  </Col>
             </Form.Group>
             </Stack>
               <Stack gap={2} direction="horizontal"  className="col-md-10 mx-auto">
                    <Button onClick={onClickSave} variant="primary" >Save</Button>
                    <Button onClick={onClickSaveNew} variant="primary" >Save New</Button>
                    <Button onClick={handleBack}variant="primary" >Back</Button>
              </Stack>
            
          </Form>
        </div>  
    </Container>
    </>
  )
}

export default StudentCreate
