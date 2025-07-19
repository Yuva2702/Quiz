import React from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result({ score }) {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Your Score: {score}</h1>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
}

export default Result;
