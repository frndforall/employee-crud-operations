import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react' 

 
function EmployeList(props) { 
  const [data, setData] = useState([]); 
  const GetData = async () => {  
    const result = await axios('http://localhost:3001/api/v1/employees');  
    setData(result.data);  
  }; 

  useEffect(() => { 
    GetData();  
  }, []); 
   
  const deleteEmployee = (_id) => {  
      console.log(_id);
    debugger;  
    axios.post('http://localhost:3001/api/v1/employees/delete?id=' + _id)  
      .then((result) => {  
        // props.history.push('/EmployeList')  
        GetData();
      });  

  };  

  const confirmDelete = (_id) => {
    window.confirm("Are you sure you wish to delete this item?") && deleteEmployee(_id)
  }

  const updateEmployee = (id) => {  
    console.log(id);
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
                    <th>Id</th>
                    <th>Name</th>  
                    <th>Email</th>  
                    <th>Age</th>  
                    <th>Salary</th>   
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, id) => {  
                      return <tr> 
                        <td>{item._id}</td>  
                        <td>{item.name}</td>  
                        <td>{item.email}</td>  
                        <td>{item.age}</td>  
                        <td>{item.salary}</td>  
                        <td>  
						<div class="btn-group">  
                            <button className="btn btn-warning" onClick={() => { updateEmployee(item._id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { confirmDelete(item._id) }}>Delete</button>  
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