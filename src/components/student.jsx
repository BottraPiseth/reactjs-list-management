import React from 'react'
import "./css/student.css"
import {Table, Container, Button, Stack, Col, Row,} from 'react-bootstrap';
import {useState, useEffect} from "react";
import axios from "axios";
import { AiFillEdit,AiFillFileAdd} from 'react-icons/ai';
import { CiCircleRemove} from 'react-icons/ci';
import{useNavigate} from 'react-router-dom'


function Student() { 

  const [listStudent, setListStudent] = useState([])
  
  const navigate = useNavigate()
//useeffect
  useEffect(() => {
    getListStudent();
  },[])
// call api
  const getListStudent = () => {
    axios({
     url : "https://nodejs-course-g2.vercel.app/api/student",
      method : "GET",
      data : {},
      header : {}
    }).then(res=>{
      var data = res.data;
      console.log(data)
      setListStudent(data.list);
    })
  }
//btnNew
    function onClickNew() {
      navigate("/student/create")
  } 
//btnDetele
const onClickRemove=(student_id)=>{
  console.log(student_id)
  axios({
    url: "https://nodejs-course-g2.vercel.app/api/student",
    method: "DELETE",
    data: { 
      "student_id": student_id
    },
   header: {}, 
  }).then(res=>{
    var data = res.data;
    console.log(data)
    getListStudent(data.list);
  });
}
//btnEdit
const onClickToEdit = (student_id) => {
 navigate("/student/create/"+student_id)
}
  return (
    <>
       <Container>
       <Row> 
          <Col  xs={11} >
            <p className='textList'>Student's List : {listStudent.length}</p>
          </Col>
          <Col xs={1} >
            <Button onClick={onClickNew} variant="secondary" size="xs" className="btnAdd">
              < AiFillFileAdd className=' AiFillFileAdd'/>Add</Button>{' '}
          </Col>    
        </Row>
        
       <Table striped bordered hover  > 
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Tell</th>
                <th>Email</th>
                <th>Status</th>
                <th>Create_at</th>
                <th>Active</th>
              </tr>
            </thead>
             <tbody>
                    {
                      listStudent.map((item,index)=>{
                        return(
                          <tr key={index}>
                              <td>{index +1}</td>
                              <td>{item.firstname}</td>
                              <td>{item.lastname}</td>
                              <td>{item.gender === 1 ? "Male":"Female"}</td>
                              <td>{item.tel}</td>
                              <td>{item.email}</td>
                              <td>{item.status === 1 ? "Actived":"Disable"}</td>
                              <td>{item.create_at}</td>
                              <td>
                                  <Stack gap={3} direction="horizontal">
                                    <Button onClick={()=>onClickToEdit(item.student_id)} variant="secondary" size="sm">< AiFillEdit/>Edit</Button>{' '}
                                    <Button onClick={()=>onClickRemove(item.student_id)} variant="success" size="sm">< CiCircleRemove/>Remove</Button>{' '}
                                  </Stack> 
                              </td>
                          </tr>
                        )
                      })
                    }

            </tbody> 
        </Table>
       </Container>
        
    </>
  )
}

export default Student