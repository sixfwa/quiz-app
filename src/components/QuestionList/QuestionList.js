import React from "react";

import Question from "../Question/Question";

import questionListStyles from "./question-list.module.scss";

const QuestionList = ({ quiz }) => {
  return (
    <div>
      <h1>List of Questions</h1>
      <div className={questionListStyles.subtitle}>
        <h2>Question</h2>
        <h2>Answer</h2>
      </div>
      <div className={questionListStyles.container}>
        {quiz.questions !== undefined
          ? quiz.questions.map((question, index) => (
              <Question
                key={index}
                question={question.question}
                answer={question.answer}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default QuestionList;
