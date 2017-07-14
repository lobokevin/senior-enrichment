import React, { Component } from 'react';
import store from '../store.jsx'
import { connect } from 'react-redux';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';

import {createStudentThunk} from '../reducers/student'

class StudentDetails extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event){
  event.preventDefault();

  let numCampusId = Number(event.target.campus.value)

  let newObj = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    campusId: numCampusId
  }

  console.log('event.target.campus.value', event.target.campus.value, typeof numCampusId);

  this.props.createStudent(newObj);

  this.props.history.push('/students');
}

handleChange(event){
  event.preventDefault();
  console.log(event.target.value);
}


  render(){
    return (
        <div className="container-fluid">
      <div className="row">
      <div className="col-md-10">
              <h2>Update a Student</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Student Id:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="id" placeholder="Enter Student ID" name="id" onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" />
                  </div>
                </div>
                <div className="form-group">


                  <label className="control-label col-sm-2" htmlFor="campus">Campus:</label>
                  <div className="col-sm-10">
                  <select className="form-control" name="campus">
                    {this.props.campuses.map(function(camp){
                      console.log(camp);
                      return (<option key={camp.id} value={camp.id}>{camp.name}</option>);
                    })}
                  </select>

            </div>


                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
            </div>

    );
  }
}


// CONTAINER

const mapProps = state => ({
  campuses: state.campus
});

const mapDispatch = dispatch => ({
  createStudent: (student) => {
    dispatch(createStudentThunk(student));
  }
}
);

export default withRouter(connect(mapProps, mapDispatch)(StudentDetails));
