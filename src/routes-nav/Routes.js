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

function AppRoutes({ login, signup }) {
  console.debug("AppRoutes");

  return (
    <div className="pt-5">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<LoginForm login={login} />} />
        <Route exact path="/signup" element={<SignupForm signup={signup} />} />
        <Route
          exact
          path="/companies"
          element={<PrivateRoute element={<CompanyList />} />}
        />
        <Route
          exact
          path="/companies/:handle"
          element={<PrivateRoute element={<CompanyDetail />} />}
        />
        <Route
          exact
          path="/jobs"
          element={<PrivateRoute element={<JobList />} />}
        />
        <Route
          exact
          path="/profile"
          element={<PrivateRoute element={<ProfileForm />} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Homepage from '../homepage/Homepage';
// import CompanyList from '../companies/CompanyList';
// import CompanyDetail from '../companies/CompanyDetail';
// import JobList from '../jobs/JobList';
// import ProfileForm from '../profiles/ProfileForm';
// import LoginForm from '../auth/LoginForm';
// import SignupForm from '../auth/SignupForm';
// import PrivateRoute from './PrivateRoute';

// function AppRoutes({ login, signup }) {
//     console.debug('AppRoutes');

//     return (
//         <div className="pt-5">
//         <Routes>
//             <Route exact path="/">
//                 <Homepage />
//             </Route>

//             <Route exact path="/login">
//                 <LoginForm login={login} />
//             </Route>

//             <Route exact path="/signup">
//                 <SignupForm signup={signup} />
//             </Route>

//             <PrivateRoute exact path="/companies">
//                 <CompanyList />
//             </PrivateRoute>

//             <PrivateRoute exact path="/companies/:handle">
//                 <CompanyDetail />
//             </PrivateRoute>

//             <PrivateRoute exact path="/jobs">
//                 <JobList />
//             </PrivateRoute>

//             <PrivateRoute exact path="/profile">
//                 <ProfileForm />
//             </PrivateRoute>

//             <Navigate to="/" />
//         </Routes>
//         </div>
//     );
// }

// export default AppRoutes;
