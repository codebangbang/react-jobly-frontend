import React from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ element }) {
  const { currentUser } = React.useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default PrivateRoute;
