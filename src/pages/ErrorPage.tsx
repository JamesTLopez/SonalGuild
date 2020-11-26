import React from "react";

interface props {
  status: number;
}

const ErrorPage: React.FC<props> = ({ status }) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1>An Error has occured</h1>
        <h2>Response status: {status}</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
