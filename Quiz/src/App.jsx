import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserName={setUserName} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<Quiz userName={userName} setScore={setScore} />} />
        <Route path="/result" element={<Result score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
