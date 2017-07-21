import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Campus extends Component {

  render(){

    return (
      <div className="col-md-6" style={{padding: '10px'}}>
        <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src="https://www.bc.edu/content/dam/files/sites/imp/jpg/prop_lowerquad.jpg" alt="Card image cap" />
        <div className="card-block">
        <h4 className="card-title"> {this.props.value.name} </h4>
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
