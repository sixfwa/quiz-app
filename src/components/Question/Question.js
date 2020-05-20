import React from "react";
import questionStyles from "./question.module.scss";

const Question = ({ question, answer }) => {
  return (
    <li className={questionStyles.question}>
      <p>Question: {question}</p>
      <p>Answer: {answer}</p>
    </li>
  );
};

export default Question;
