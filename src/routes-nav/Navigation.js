import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import UserContext from "../auth/UserContext";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Navigation">
      {/* <h1>Navigation</h1> */}
      <p>
        {currentUser ? (
          <>
            <Link to="/profile" className="nav-link">
              Welcome {currentUser.firstName}!
            </Link>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/companies" className="nav-link">
              Companies
            </Link>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/" onClick={logout} className="nav-link">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/companies" className="nav-link">
              Companies
            </Link>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

export default Navigation;
