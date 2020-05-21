import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";

import { QuizContext } from "../../context/QuizContext";

import QuestionPlay from "../../components/QuestionPlay/QuestionPlay";

import playQuizStyles from "./play-quiz.module.scss";

/*
    Answer each question one at a time.


    {index < quiz.questions.length - 1 ? (
        <button onClick={() => setIndex(index + 1)}>Next</button>
      ) : null}
*/

const PlayQuiz = () => {
  const [quiz] = useContext(QuizContext);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const incrementCorrect = () => {
    setCorrect(correct + 1);
  };

  const incrementIncorrect = () => {
    setIncorrect(incorrect + 1);
  };

  return (
    <div className={playQuizStyles.page}>
      <div className={playQuizStyles.container}>
        {index < quiz.questions.length ? (
          <Fragment>
            <h1>{quiz.name}</h1>
            <h3 className={playQuizStyles.number}>
              Question: {index + 1} / {quiz.questions.length}
            </h3>
            <div className={playQuizStyles.score}>
              <p>Correct: {correct}</p>
              <p>Incorrect: {incorrect}</p>
            </div>
            <QuestionPlay
              question={quiz.questions[index]}
              index={index}
              setIndex={setIndex}
              incrementCorrect={incrementCorrect}
              incrementIncorrect={incrementIncorrect}
            />
          </Fragment>
        ) : (
          <div>
            <h1>Congrats</h1>
            <h2>Number of Correct Answers: {correct}</h2>
            <h2>Number of Incorrect Answers: {incorrect}</h2>
          </div>
        )}
      </div>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </div>
  );
};

export default PlayQuiz;
