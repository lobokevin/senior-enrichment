import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createStudentThunkCreator} from '../reducers/students'

class NewStudent extends Component {
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

  this.props.createStudent(newObj);
  this.props.history.push('/students');
}


  render(){
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-10">
              <h2>Add a Student</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
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
                    {this.props.campuses.map( camp => {
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
  campuses: state.campuses
});

const mapDispatch = dispatch => ({
  createStudent: (student) => {
    dispatch(createStudentThunkCreator(student));//createStudentThunkCreator
  }
}
);

export default connect(mapProps, mapDispatch)(NewStudent);//is withRouter necessary?
