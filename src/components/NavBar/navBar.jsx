import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../utilities/context/authContext";

function NavBar(props) {
  const { user, setUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      {!user && (
        <NavLink className="navbar-brand" to="/login">
          SWAT
        </NavLink>
      )}
      {user && (
        <NavLink className="navbar-brand" to="/home">
          SWAT
        </NavLink>
      )}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}

          {user && (
            <React.Fragment>
              <NavLink className="nav item nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-item nav-link" to="/resources">
                Resources
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="navbar-nav navbar-right">
        {user && (
          <React.Fragment>
            <NavLink className="nav item nav-link" to="/logout">
              LogOut
            </NavLink>
            <NavLink className="nav item nav-link ml-auto" to="/user">
              {user && user.name}
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
