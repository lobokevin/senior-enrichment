import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createCampusThunkCreator} from '../reducers/campuses'

class NewCampus extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event){
  event.preventDefault();

  this.props.createCampus({name: event.target.name.value});
  this.props.history.push('/');
}


  render(){
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-10">
              <h2>Add a Campus</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">Campus Name:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
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

const mapProps = () => ({
});

const mapDispatch = dispatch => ({
  createCampus: (campus) => {
    dispatch(createCampusThunkCreator(campus));//createStudentThunkCreator
  }
}
);

export default connect(mapProps, mapDispatch)(NewCampus);//is withRouter necessary?
