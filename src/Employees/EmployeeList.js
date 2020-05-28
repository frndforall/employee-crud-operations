import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react' 

 
function EmployeList(props) { 
  const [data, setData] = useState([]); 
  useEffect(() => { 
    const GetData = async () => {  
      const result = await axios('http://localhost:3001/api/v1/employees');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deleteEmployee = (id) => {  
    debugger;  
    axios.delete('http://localhost:62168/api/hooks/Deleteemployee?id=' + id)  
      .then((result) => {  
        props.history.push('/EmployeList')  
      });  

  };  

  const updateEmployee = (id) => {  
    props.history.push({  
      pathname: '/edit/' + id  

    });  

  };  
  return (  
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card> 
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Employee List  
              </CardHeader>  

            <CardBody>  

              <Table hover bordered striped responsive size="sm">  

                <thead>  

                  <tr>
                    <th>Name</th>  
                    <th>Email</th>  
                    <th>Age</th>  
                    <th>Salary</th>   
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr>  
                        <td>{item.name}</td>  
                        <td>{item.email}</td>  
                        <td>{item.age}</td>  
                        <td>{item.salary}</td>  
                        <td>  
						<div class="btn-group">  
                            <button className="btn btn-warning" onClick={() => { updateEmployee(item.Id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { deleteEmployee(item.Id) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card> 
        </Col>  
      </Row>
    </div>  
  )  
}  
export default EmployeList