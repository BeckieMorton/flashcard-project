import { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      id: 1,
      question: "Where is the White Sea located?",
      answer: "North of Russia in the Arctic Ocean",
    },
    {
      id: 2,
      question: "Which country has the most islands?",
      answer: "Sweden",
    },
    {
      id: 3,
      question: "How many countries border Germany?",
      answer: "9",
    },
  ];

  const [selectedId, setSelectectedId] = useState(3);

  return (
    <>
      <h1>Flashcard Quiz</h1>
      <h2>How good are your geography skills?</h2>
      <div className="card">
        {questions.map((question) => (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : "cardBox"}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
