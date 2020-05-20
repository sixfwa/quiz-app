import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";

import createQuizStyles from "./create-quiz.module.scss";

const CreateQuiz = ({ history }) => {
  const [quizName, setQuizName] = useState("");
  const [quiz, setQuiz] = useContext(QuizContext);

  const addQuiz = (e) => {
    e.preventDefault();
    setQuiz({ name: quizName, questions: [] });
    history.push(`/createquiz/${quizName}`);
  };

  return (
    <div className={createQuizStyles.page}>
      <div className={createQuizStyles.container}>
        <form onSubmit={addQuiz} className={createQuizStyles.form}>
          <h1>ENTER QUIZ NAME</h1>
          <input
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            required
          />
          <button className={createQuizStyles.nextButton}>Next</button>
        </form>
        <Link to="/">
          <button className={createQuizStyles.homeButton}>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateQuiz;
