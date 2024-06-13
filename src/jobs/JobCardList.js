import React from "react";
import JobCard from "./JobCard";


function JobCardList({ jobs, apply }) {
  if (!Array.isArray(jobs)) {
    console.error("Expected an array of jobs but got: ", jobs);
    return null;
  }

  return (
    <div className="JobCardList">
      <h1> Now Hiring!</h1>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
          apply={apply}
        />
      ))}
    </div>
  );
}

export default JobCardList;
