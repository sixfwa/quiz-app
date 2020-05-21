import React from "react";
import questionStyles from "./question.module.scss";

const Question = ({ question, answer }) => {
  return (
    <li className={questionStyles.question}>
      <p className={questionStyles.title}>{question}</p>
      <p className={questionStyles.answer}>{answer}</p>
    </li>
  );
};

export default Question;
