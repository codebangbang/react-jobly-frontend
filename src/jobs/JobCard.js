import React, { useContext, useState, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

function JobCard({ id, title, salary, equity, companyName }) {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  useEffect(
    function updateAppliedStatus() {
      setApplied(hasAppliedToJob(id));
    },
    [id, hasAppliedToJob]
  );

  async function handleApply() {
    if (hasAppliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{companyName}</p>
        {salary && <div>Salary: {formatSalary(salary)}</div>}
        {equity !== undefined && <div>Equity: {equity}</div>}
        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

function formatSalary(salary) {
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }
  return digitsRev.reverse().join("");
}

export default JobCard;
