import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CampusList extends Component {

  render() {

    let students = this.props.students;
    let campus = this.props.campuses.filter(camp => {
      return camp.id === +this.props.match.params.id
    });

    let  name = 'Campus';
    let  id = 0;

    if (campus[0]) {
      name = campus[0].name;
      id = campus[0].id;
    }

    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4">
            <Link to="/campus"> <button className="btn btn-lg btn-primary">Add a campus</button> </Link>
          </div>
        </div>

        <div>
        <p className="card-text"><h2><Link to={`/campusdetails/${id}`}>{name}</Link></h2> </p>
      <p> Click on the campus' name to edit it's details
          </p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Students</th>
              </tr>
            </thead>
            <tbody>

              {students.map(stud => {
                if (stud.campusId === +this.props.match.params.id) {
                  return (
                    <tr key={stud.id}>
                      <td><Link to={`/student/${stud.id}`}>{stud.name}</Link></td>
                    </tr>
                  );
                }
              })
            }

            </tbody>
          </table>
        </div>
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

const mapProps = state => ({campuses: state.campuses, students: state.students})

export default connect(mapProps, mapDispatch)(CampusList);
