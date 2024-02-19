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
    {
      id: 4,
      question: "In what continent is Suriname?",
      answer: "South America",
    },
    {
      id: 5,
      question:
        "Which country has the highest population density in the world?",
      answer: "Monaco",
    },
    {
      id: 6,
      question: "What country was previously called Ceylon?",
      answer: "Sri Lanka",
    },
  ];

  const [selectedId, setSelectectedId] = useState(null);

  const [attempts, setAttempts] = useState(0);

  const handleClick = (id) => {
    console.log("test");
    setSelectectedId(id);
    setAttempts(attempts + 1);
  };

  return (
    <>
      <h1>Flashcard Quiz</h1>
      <h2>How good are your geography skills?</h2>
      <div className="card">
        {questions.map((question) => (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : "cardBox"}
            onClick={() => handleClick(question.id)}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p>Attempts: {attempts}</p>
        {}
      </div>
    </>
  );
}

export default App;
