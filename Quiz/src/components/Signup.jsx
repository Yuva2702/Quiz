import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      // Save credentials in localStorage
      localStorage.setItem("quizUser", JSON.stringify({ username, password }));
      alert("Account created! Please login.");
      navigate("/");
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="page-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
