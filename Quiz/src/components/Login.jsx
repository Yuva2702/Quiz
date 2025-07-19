import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUserName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("quizUser"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setUserName(username);
      navigate("/quiz");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="page-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
