import { connect } from 'react-redux';
import { vendorAction } from '../_actions';
import AppBar from '../components/appbar';
import Nav from '../components/nav';
import { withRouter } from 'react-router-dom';
import React from 'react';  
import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';  
import { useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

 
function EmployeeList(props) { 
  const { classes } = props;
  const { data } = props;


    useEffect(() => { 
      const { dispatch } = this.props;
        dispatch(vendorAction.getVendor());
    }, []); 

  const deleteEmployee = (_id) => {  
      console.log(_id);
    debugger;  
    const { dispatch } = this.props;
    dispatch(vendorAction.deleteVendorById(_id))

  };  

  const confirmDelete = (_id) => {
    window.confirm("Are you sure you wish to delete this item?") && deleteEmployee(_id)
  }

  // const updateEmployee = (id) => {  
  //   console.log(id);
  //   props.history.push({  
  //     pathname: '/edit/' + id  

  //   });  

  // };  
  return (  
    <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
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
                                  <th>Actions</th>   
                                </tr>  
                              </thead>  
                              <tbody>  
                                {  
                                  data.map((item, id) => {  
                                    return <tr> 
                                      <td>{item.name}</td>  
                                      <td>{item.email}</td>  
                                      <td>{item.age}</td>  
                                      <td>{item.salary}</td>  
                                      <td>  
                                        <div class="btn-group">  
                                          <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-vendor/${item._id}`}>
                                            <EditIcon />
                                          </IconButton>
                                          <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.deleteEmployee(item._id)}>
                                            <DeleteIcon />
                                          </IconButton>
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
              </main>
            </div>
        </div>
  )  
} 


EmployeeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
return {
    data : state.data
};
}

const connectedEmployee = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(EmployeeList)));

export { connectedEmployee as EmployeeList };