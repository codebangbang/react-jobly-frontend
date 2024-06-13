import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const isLoggedIn = false; // Replace with your logic to determine if the user is logged in

  return (
    <div className="Navigation">
      {/* <h1>Navigation</h1> */}
      <p>
        {!isLoggedIn && (
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
          </>
        )}

        {!isLoggedIn && (
          <>
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
