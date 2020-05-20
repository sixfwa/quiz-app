import React from "react";

import Question from "../Question/Question";

const QuestionList = ({ quiz }) => {
  return (
    <div>
      <h1>List of Questions</h1>
      <div>
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
