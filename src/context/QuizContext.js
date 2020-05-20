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
  const [quiz, setQuiz] = useState({});

  return (
    <QuizContext.Provider value={[quiz, setQuiz]}>
      {props.children}
    </QuizContext.Provider>
  );
};
