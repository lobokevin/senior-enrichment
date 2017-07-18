import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Campus extends Component {
  constructor(props) {//empty constructor..
    super(props)
  }

  render(){

    return (
      <div className="col-md-6">
        <div className="card" style={{width: '20rem'}}>
        <div className="card-block">
        <h4 className="card-title"> {this.props.value.name} </h4>
      <p className="card-text"> The best campus </p>
      <Link to={`/campus/${this.props.value.id}`}>
        <a className="btn btn-primary">Student List</a>
        </Link>
        </div>
      </div>
    </div>
    );
  }
}

// container
