import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES'; //get campuses


/* ------------   ACTION CREATORS     ------------------ */

const getCampuses   = campuses => ({ type: GET_CAMPUSES, campuses });

/* ------------       REDUCER     ------------------ */

export default function reducer (campus = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    default:
      return campus;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampusesThunk = () => dispatch => {
  axios.get('/api/campus')
       .then(res => dispatch(getCampuses(res.data)));
};
