import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllCampus from './components/AllCampus';
import AllStudents from './components/AllStudents';
import CampusList from './components/CampusList';
import NewStudent from './components/NewStudent';
import StudentDetails from './components/StudentDetails';
import NewCampus from './components/NewCampus'
import CampusDetails from './components/CampusDetails';
import {fetchStudentsThunkCreator} from './reducers/students';
import {fetchCampusesThunkCreator} from './reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render (){
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/campus/:id" component={CampusList} />
            <Route exact path="/student/:id" component={StudentDetails} />
            <Route exact path="/student" component={NewStudent} />
            <Route exact path="/campus" component={NewCampus} />
            <Route exact path="/campusdetails/:id" component={CampusDetails} />
            <Route exact path="/" component={AllCampus} />

          {/* <Route exat path="" */}
            <Route component={AllCampus} />
          </Switch>
          <Footer />
      </div>
      </Router>

    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({});

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudentsThunkCreator());
    dispatch(fetchCampusesThunkCreator());
  }
}
);

export default connect(mapProps, mapDispatch)(Routes);
