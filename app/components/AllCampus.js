import React, {Component} from 'react';
import Campus from './Campus';
import {connect} from 'react-redux';

class AllCampus extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <h3>Welcome to Margaret Hamilton's Code Academy</h3>
        </div>
        {this.props.campuses.map(function(camp) {
          return (
            <div key={camp.id}><Campus value={camp} /></div>
          );
        })}
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

const mapProps = state => ({campuses: state.campuses})

export default connect(mapProps, mapDispatch)(AllCampus);
