import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'

/* ------------   ACTION CREATORS     ------------------ */

const getStudents   = students => ({ type: GET_STUDENTS, students });
const updateStudent = student => ({type: UPDATE_STUDENT, student});
const deleteStudent = id => ({type: DELETE_STUDENT, id})
const createStudent = student => ({type: CREATE_STUDENT, student})

/* ------------       REDUCER     ------------------ */

export default function reducer (student = [], action) {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case UPDATE_STUDENT:
    return student.map(stud => (
        action.stud.id === stud.id ? action.stud : stud
      ));

    case DELETE_STUDENT:
    return student.filter(function(stud){
      return stud.id !== +action.id
    }
  );

  case CREATE_STUDENT:
  return [action.student, ...student]

    default:
      return student;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudentsThunk = () => dispatch => {
  axios.get('/api/student')
       .then(res => dispatch(getStudents(res.data)));
};

export const createStudentThunk = student => dispatch => {
  axios.post('/api/student', student)
       .then(res => dispatch(createStudent(res.data)))
       .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const updateStudentThunk = (id, student) => dispatch => {
  axios.put(`/api/student/${id}`, student)
       .then(res => dispatch(updateStudent(res.data)))
       .catch(err => console.error(`Updating user: ${student} unsuccesful`, err));
};

export const deleteStudentThunk = id => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/student/${id}`)
       .catch(err => console.error(`Deleting student: ${id} unsuccesful`, err));
};
