import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const questions = [
  { question: "What is React?", options: ["Library", "Framework", "Language", "None"], answer: "Library" },
  { question: "Which hook is used for state?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useState" },
  { question: "React is written in?", options: ["Python", "C++", "JavaScript", "Java"], answer: "JavaScript" }
];

function Quiz({ userName, setScore }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (timer === 0) nextQuestion();
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const nextQuestion = () => {
    if (selected === questions[index].answer) setScore((prev) => prev + 1);
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected("");
      setTimer(30);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="page-container">
      <h2>Hello, {userName}</h2>
      <h3>Time Left: {timer}s</h3>
      <h2>{questions[index].question}</h2>
      <div className="options">
        {questions[index].options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selected === opt ? "selected" : ""}`}
            onClick={() => setSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Quiz;
