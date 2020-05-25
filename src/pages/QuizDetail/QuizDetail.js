import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";

import QuestionList from "../../components/QuestionList/QuestionList";

import "./quiz-detail.styles.scss";

const QuizDetail = ({ match }) => {
  const [quiz, setQuiz] = useContext(QuizContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const addQuestion = (e) => {
    e.preventDefault();
    const questionAnswer = {
      question: question,
      answer: answer,
    };
    setQuiz({ ...quiz, questions: [...quiz.questions, questionAnswer] });
    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="quiz-detail-container">
      <div>
        <h1 className="title">
          ADD QUESTIONS TO {match.params.name.toUpperCase()}
        </h1>
        <h2 style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}>
          PRESS HOME WHEN YOU'RE FINISHED. THEN PLAY THE QUIZ
        </h2>

        <form onSubmit={addQuestion} className="question-answer">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="question-field"
            placeholder="Question"
          />
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            className="answer-field"
            placeholder="Answer"
          />
          <button className="add-button">Add</button>
        </form>
        {quiz.questions && quiz.questions.length ? (
          <QuestionList quiz={quiz} />
        ) : null}
        <Link to="/">
          <button className="home-button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default QuizDetail;
