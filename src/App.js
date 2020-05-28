import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';    
import EmployeeList from './Employees/EmployeeList'
import AddEmployee from './Employees/AddEmployee'
import UpdateEmployee from './Employees/UpdateEmployee'


function App() {
  return (
    <div className="App">
     <Router>    
      <div className="container">    
        <nav className="btn btn-warning navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/AddEmployee'} className="nav-link">Add Employee</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/EmployeeList'} className="nav-link">Employee List</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>
          <Route path='/' component={EmployeeList}/>    
          <Route path='/AddEmployee' component={AddEmployee}/>
          <Route path='/EmployeeList' component={EmployeeList}/>
          <Route path='/edit/:id' component={UpdateEmployee}/>    
        </Switch>    
      </div>    
 </Router> 
    </div>
  );
}

export default App;
