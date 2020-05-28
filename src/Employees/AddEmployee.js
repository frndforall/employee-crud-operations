import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  


function AddEmployee(props) {  

  const [employee, setemployee] = useState({ name: '', email: '', age: '',salary: ''});  
  const [showLoading, setShowLoading] = useState(false); 
  const apiUrl = "http://localhost:3001/api/v1/employees/create";  


  const addEmployee = (e) => {  
    e.preventDefault();  
    debugger;  
    const data = { name:employee.name, email: employee.email, age: employee.age, salary:employee.salary};  
    axios.post(apiUrl, data)  
      .then((result) => {  
        props.history.push('/EmployeeList')  
      });  
  };

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setemployee({...employee, [e.target.name]: e.target.value});  
  } 

  const onCancel = (e) => {
    props.history.push('/EmployeeList');
  }
  
  
  return (  
    <div className="app flex-row align-items-center">  
      <Container>  
        <Row className="justify-content-center">  
          <Col md="12" lg="10" xl="8">  
            <Card className="mx-4">  
              <CardBody className="p-4">  
                <Form onSubmit={addEmployee}>  
                  <h1>Add Employee</h1>  
                  <InputGroup className="mb-3">  
                    <Input type="text" name="name" id="name" placeholder="Name" value={employee.name} onChange={ onChange }  />  
                  </InputGroup>  
                   <InputGroup className="mb-3">  
                    <Input type="text" placeholder="Email" name="email" id="email" value={employee.email} onChange={ onChange }/>  
                  </InputGroup>  
                  <InputGroup className="mb-3">  
                    <Input type="text" placeholder="Age" name="age" id="age"  value={employee.age} onChange={ onChange }  />  
                  </InputGroup>  
                  <InputGroup className="mb-4">  
                    <Input type="text" placeholder="Salary" name="salary" id="salary" value={employee.salary} onChange={ onChange }  />  
                  </InputGroup>   
             <CardFooter className="p-4">  
                <Row>  
                  <Col xs="12" sm="6">  
                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                  </Col>  
                  <Col xs="12" sm="6">  
                    <Button className="btn btn-info mb-1" block onClick={onCancel}><span>Cancel</span></Button>  
                  </Col>  
                </Row>  
              </CardFooter>  
                </Form>  
              </CardBody>  
            </Card>  
          </Col>  
        </Row>  
      </Container>  
    </div>  
  )  
}  
export default AddEmployee