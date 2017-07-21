import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'

/* ------------   ACTION CREATORS     ------------------ */

const getStudents = students => ({type: GET_STUDENTS, students});
const updateStudent = student => ({type: UPDATE_STUDENT, student});
const deleteStudent = id => ({type: DELETE_STUDENT, id})
const createStudent = student => ({type: CREATE_STUDENT, student})

/* ------------       REDUCER     ------------------ */

export default function reducer(students = [], action) { //students = [] might be more accurate
  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case UPDATE_STUDENT:
      return students.map(stud => {
        return action.student.id === stud.id
          ? action.student
          : stud
      });

    case DELETE_STUDENT:
      return students.filter(stud => {
        return stud.id !== +action.id //nicely done
      });

    case CREATE_STUDENT:
      return [
        action.student, ... students
      ]

    default:
      return students;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudentsThunkCreator = () => dispatch => {
  return axios.get('/api/student').then(res => dispatch(getStudents(res.data)));
};

export const createStudentThunkCreator = student => dispatch => {
  return axios.post('/api/student', student).then(res => dispatch(createStudent(res.data))).catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const updateStudentThunkCreator = (student) => dispatch => {
  return axios.put(`/api/student/${student.id}`, student).then(res => dispatch(updateStudent(res.data))).catch(err => console.error(`Updating user: ${student} unsuccesful`, err));
};

// export const deleteStudentThunk = id => dispatch => {
//    dispatch(deleteStudent(id)); //This should not be here... this is called optimistic loading. This should only happen AFTER the axios.delete is successful
//   return axios.delete(`/api/student/${id}`)
//     .then(() => {
//       dispatch(deleteStudent(id));
//     })
//     .catch(err => console.error(`Deleting student: ${id} unsuccesful`, err));
// };
// Below is just another way to write the above
//
// Remember technically it is a thunkCreator, and the function nested inside is the thunk itself

export const deleteStudentThunkCreator = function(id) {
  return function deleteStudentThunk(dispatch) {
    return axios.delete(`/api/student/${id}`).then(() => {
      dispatch(deleteStudent(id));
    }).catch(err => console.error(`Deleting student: ${id} unsuccesful`, err));
  }
}

// We want the thunk mainly to run, so that we can do the axios request and dispatch the action
// object (deleteStudent(id)) ... but we can't just simply invoke the thunk.
// you must DISPATCH the thunk...
//
// let deleteStudentThunk = deleteStudentThunkCreator(5)
// deleteStudentThunk()
