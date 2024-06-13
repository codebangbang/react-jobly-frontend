import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import ProfileForm from "../profiles/ProfileForm";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

function AppRoutes({ login, signup, logout  }) {
  console.debug("AppRoutes");

  return (
    <div className="pt-5">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />

        <Route
          path="/companies"
          element={<PrivateRoute element={<CompanyList />} />}
        />
        <Route
          path="/companies/:handle"
          element={<PrivateRoute element={<CompanyDetail />} />}
        />
        <Route path="/jobs" element={<PrivateRoute element={<JobList />} />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfileForm />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
