import React, {Component} from 'react';
import Campus from './Campus';
import {connect} from 'react-redux';

class AllCampus extends Component {
  constructor(props) {//empty constructors are unnecessary
    super(props)
  }

  render() {

    let campuses = this.props.campuses;

    return (
      <div>
      <div className="row">
        <h3>Welcome to Margaret Hamilton's Code Academy</h3>
    </div>
      { campuses.map(function(camp) {
        return (<div key={camp.id}><Campus value={camp} /></div>);
      }
    )}
  </div>
    );
  }
}

//CONTAINER
const mapDispatch = dispatch => ({
  // deleteStudent: (id) => {
  //   dispatch(deleteStudentThunk(id));
  // }
});

const mapProps = state => (
  {campuses: state.campus})

export default connect(mapProps, mapDispatch)(AllCampus);
