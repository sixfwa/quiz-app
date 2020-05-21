import React, { useState, Fragment, useEffect } from "react";

import questionPlayStyles from "./question-play.module.scss";

const QuestionPlay = ({
  question,
  index,
  setIndex,
  incrementCorrect,
  incrementIncorrect,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [submitAnswer, setSubmitAnswer] = useState(false);

  const handleAnswer = (e) => {
    e.preventDefault();
    const answer = userAnswer.toLowerCase();
    const tempCorrect = answer === question.answer.toLowerCase();
    setIsCorrect(tempCorrect);
    setUserAnswer("");
    setSubmitAnswer(true);
    tempCorrect ? incrementCorrect() : incrementIncorrect();
  };

  const handleNext = () => {
    setSubmitAnswer(false);
    setIsCorrect(null);
    setIndex(index + 1);
  };

  return (
    <div className={questionPlayStyles.container}>
      <h2 className={questionPlayStyles.question}>{question.question}</h2>
      {submitAnswer && !isCorrect ? (
        <Fragment>
          <h3>Correct answer: {question.answer}</h3>
        </Fragment>
      ) : null}
      <form onSubmit={handleAnswer}>
        {!submitAnswer ? (
          <Fragment>
            <input
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              autoFocus
              required
            />
            <button type="submit" className={questionPlayStyles.submit}>
              Submit
            </button>
          </Fragment>
        ) : null}
      </form>

      {submitAnswer && isCorrect ? (
        <Fragment>
          <h3>Correct</h3>
        </Fragment>
      ) : submitAnswer && !isCorrect ? (
        <h3>Incorrect</h3>
      ) : null}

      {submitAnswer ? (
        <Fragment>
          <button
            onClick={handleNext}
            className={questionPlayStyles.next}
            autoFocus
          >
            Next
          </button>
        </Fragment>
      ) : null}
    </div>
  );
};

export default QuestionPlay;
