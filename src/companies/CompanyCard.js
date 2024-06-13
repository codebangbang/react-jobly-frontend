import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, description, handle }) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/companies/${handle}`}>{name}</Link>
        </h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default CompanyCard;
