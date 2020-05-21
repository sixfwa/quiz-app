import React, { useState, createContext } from "react";

export const QuizContext = createContext();

/*
    the structure of quiz:
        {
            name: name of the quiz
            questions: [
                {
                    question: question1
                    answer: answer2
                }
            ]
        }
*/

export const QuizProvider = (props) => {
  const [quiz, setQuiz] = useState({
    name: "Capitals of the World",
    questions: [
      {
        question: "What is the capital of England?",
        answer: "London",
      },
      {
        question: "What is the capital of France?",
        answer: "Paris",
      },
      {
        question: "What is the capital of Germany?",
        answer: "Berlin",
      },
      {
        question: "What is the capital of Italy?",
        answer: "Rome",
      },
      {
        question: "What is the capital of Spain?",
        answer: "Madrid",
      },
    ],
  });

  return (
    <QuizContext.Provider value={[quiz, setQuiz]}>
      {props.children}
    </QuizContext.Provider>
  );
};
