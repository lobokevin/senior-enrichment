import React, { Component } from 'react';
import store from '../store.jsx'
import { connect } from 'react-redux';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';

import {updateStudentThunk} from '../reducers/student'

class StudentDetails extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event){
  event.preventDefault();
  let campusValue = Number(event.target.campus.value);
  let idValue = Number(event.target.id.value)

  let newObj = {
    id: idValue,
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    campusId: campusValue
  }

  this.props.updateStudent(newObj);
  this.props.history.push('/students');

}

  render(){

    let student = null;

    student = this.props.students.filter(stud => {
      if (stud.id === +this.props.match.params.id){
        return stud
      }
    })

    student = student[0] || {};

    return (
        <div className="container-fluid">
      <div className="row">
      <div className="col-md-10">
              <h2>Update or View a Student's Details</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Student Id:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="id" placeholder="Enter Student ID" name="id" disabled value={student.id} />
                </div>
              </div>
              <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" name="name" defaultValue={student.name} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email"  defaultValue={student.email} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" placeholder="Enter password" name="password"  defaultValue={student.password} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="campus">Campus:</label>
                  <div className="col-sm-10">
                  <select className="form-control" name="campus">
                    {this.props.campuses.map(function(camp){
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
  students: state.student,
  campuses: state.campus
});

const mapDispatch = dispatch => ({
  updateStudent: (student) => {
    dispatch(updateStudentThunk(student));
  }
}
);

export default withRouter(connect(mapProps, mapDispatch)(StudentDetails));//is withRouter necessary?
