import React from 'react'
import {Table, Container,Button,Stack} from 'react-bootstrap';
import {useState, useEffect} from "react";
import axios from "axios";
import { AiFillEdit} from 'react-icons/ai';
import { CiCircleRemove} from 'react-icons/ci';
// import "css.css"

function Teacher() {
  const [listTeacher, setListTeacher] = useState([])
  
  useEffect(() => {
    getListTeacher();
  },[])
  
  const getListTeacher = () => {
    axios({
       url : "https://nodejs-course-g2.vercel.app/api/teacher",
      method : "GET",
      data : {},
      header : {}
    }).then(res=>{
      var data = res.data;
      console.log(data)
      setListTeacher(data.list);
    })
  }

  return (
    <>
       <Container>
        <p className='textList'>Teacher's List : {listTeacher.length}</p>
       <Table striped bordered hover  > 
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Tell</th>
                <th>Email</th>
                <th>Description</th>
                <th>Create_at</th>
                <th>Active</th>
              </tr>
            </thead>
             <tbody>
             {
              listTeacher.map((item,index)=>{
                return(
                  <tr key={index}>
                      <td>{index +1}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.gender === 1 ? "Male":"Female"}</td>
                      <td>{item.tel}</td>
                      <td>{item.email}</td>
                      <td>{item.description === 1 ? "Actived":"Disable"}</td>
                      <td>{item.create_at}</td>
                      <td>
                          <Stack gap={3} direction="horizontal">
                          <Button variant="secondary" size="sm">< AiFillEdit/>Edit</Button>{' '}
                            <Button variant="success" size="sm"> < CiCircleRemove/>Remove</Button>{' '}
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

export default Teacher