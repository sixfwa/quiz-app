import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../context/QuizContext";

import Button from "../../components/Button/Button";

import "./home.style.scss";

const Home = () => {
  const [quiz] = useContext(QuizContext);
  return (
    <div className="container">
      {console.log(quiz)}

      <Link to="/createquiz">
        <Button type="play">Play Quiz</Button>
      </Link>
      <Link to="/createquiz">
        <Button type="create">Create Quiz</Button>
      </Link>
    </div>
  );
};

export default Home;
