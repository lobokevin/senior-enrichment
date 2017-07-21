import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES'; //get campuses
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'


/* ------------   ACTION CREATORS     ------------------ */

const getCampuses = (campuses) => ({ type: GET_CAMPUSES, campuses });
const addCampus = (campus) => ({type: ADD_CAMPUS, campus})
const updateCampus = (campus) => ({type: UPDATE_CAMPUS, campus})

/* ------------       REDUCER     ------------------ */

export default function reducer (campuses = [], action) { //campuses = [] might be more accurate

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
    return [action.campus, ...campuses];

    case UPDATE_CAMPUS:
    return campuses.map(camp => {
      return action.campus.id === camp.id
        ? action.campus
        : camp
    })

    default:
      return campuses;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampusesThunkCreator = () => dispatch => {
  return axios.get('/api/campus')
       .then(res => dispatch(getCampuses(res.data)));
};

export const createCampusThunkCreator = (campus) => dispatch => {
  return axios.post('/api/campus/', campus)
        .then(res => dispatch(addCampus(res.data)))
        .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
}

export const updateCampusThunkCreator = campus => dispatch => {
  return axios.put(`/api/campus/${campus.id}`, campus)
  .then(res => dispatch(updateCampus(res.data)))
  .catch(err => console.error(`Updating user: ${campus} unsuccesful`, err));
}
