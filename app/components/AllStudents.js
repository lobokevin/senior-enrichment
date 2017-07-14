import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteStudentThunk} from '../reducers/student';
import { Link } from 'react-router-dom';

class AllStudents extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

handleDelete(event){
  event.preventDefault();
  let id = event.target.value
  this.props.deleteStudent(id);
}

  render(){

    let allStudents = this.props.students;

    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4">
            <Link to="/student"> <button className="btn btn-lg btn-warning pull-right">Add </button> </Link>
          </div>
        </div>

        <div>
       <h2>List of Students</h2>
       <p>r</p>
       <table className="table table-bordered">
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           {allStudents.map(stud => {
             return ( <tr key={stud.id}>
               <td>{stud.name}</td>
             <td>{stud.email}</td>
           <td><button className="btn btn-sm  btn-danger" value={stud.id} onClick={this.handleDelete} name="id" >Delete</button></td>
             </tr>)

           })}


         </tbody>
       </table>
     </div>

      </div>
    );
  }
}

//CONTAINER
const mapDispatch = dispatch => ({
  deleteStudent: (id) => {
    dispatch(deleteStudentThunk(id));
  }
}
);

const mapProps = state => ({
  students: state.student
})

export default connect(mapProps, mapDispatch)(AllStudents);
