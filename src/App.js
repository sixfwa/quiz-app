import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { QuizProvider } from "./context/QuizContext";

import Home from "./pages/Home/Home";
import CreateQuiz from "./pages/CreateQuiz/CreateQuiz";
import QuizDetail from "./pages/QuizDetail/QuizDetail";

// eslint-disable-next-line
{
  /* Quiz context provided to the Home and CreateQuiz Page */
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <QuizProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/createquiz" component={CreateQuiz} />
            <Route path="/createquiz/:name" component={QuizDetail} />
          </QuizProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
