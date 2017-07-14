import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import history from '../history';
// import { logout as logOutUser } from '../redux/auth';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/"><img src="" /></Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/students" activeClassName="active">Students</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
   }

}

/* -----------------    CONTAINER     ------------------ */

const mapProps = state => ({})
// // equivalent to:
// const mapState = state => {
//   return {
//     currentUser: state.currentUser
//   };
// };

const mapDispatch = () => ({})
  // logout: () => {
  //   dispatch(logOutUser());
    // history.push('/'); // removed to demo logout instant re-render
  // }

export default connect(mapProps, mapDispatch)(Navbar);
