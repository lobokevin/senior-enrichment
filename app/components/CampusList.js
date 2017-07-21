import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CampusList extends Component {
  constructor(props) { //empty constructor..
    super(props)

  }

  render() {

    let students = this.props.students;
    let campus = this.props.campuses.filter(camp => {
      return camp.id === +this.props.match.params.id
    });

    var name = 'Campus';
    if (campus[0]) {
      name = campus[0].name;
    }

    return (
      <div className="container-fluid">
        <div>
          <h2>{name}</h2>
          <p>More information
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
                      <Link to={`/student/${stud.id}`}>
                        <a>
                          <td>{stud.name}</td>
                        </a>
                      </Link>
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

const mapProps = state => ({campuses: state.campus, students: state.student})

export default connect(mapProps, mapDispatch)(CampusList);
