import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateCampusThunkCreator} from '../reducers/campuses'

class CampusDetails extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let idValue = Number(event.target.id.value)

    let newObj = {
      id: idValue,
      name: event.target.name.value,
    }

    this.props.updateCampus(newObj);
    this.props.history.push('/');

  }

  render() {

    let campus = null;

    campus = this.props.campuses.filter(camp => {
      if (camp.id === +this.props.match.params.id) {
        return camp
      }
    })

    campus = campus[0] || {};

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Update or View a Campus' Details</h2>
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Campus Id:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="id" placeholder="Enter Student ID" name="id" disabled value={campus.id} />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" name="name" defaultValue={campus.name} />
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

const mapProps = state => ({students: state.students, campuses: state.campuses});

const mapDispatch = dispatch => ({
  updateCampus: (campus) => {
    dispatch(updateCampusThunkCreator(campus));
  }
});

export default (connect(mapProps, mapDispatch)(CampusDetails)); //is withRouter necessary?
