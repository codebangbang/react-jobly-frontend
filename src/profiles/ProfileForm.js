import React from "react";
import { useContext } from "react";
import UserContext from "../auth/UserContext";

function ProfileForm() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Your Profile</h1>
      <div className="Profile">
        <h3>Username: {currentUser.username}</h3>
        <h3>First Name: {currentUser.firstName}</h3>
        <h3>Username: {currentUser.lastName}</h3>
        <h3>Email: {currentUser.email}</h3>
      </div>
    </div>
  );
}

export default ProfileForm;
