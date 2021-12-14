import React, { Fragment } from "react";
import StrategyView from "./views/StrategyView";
import ListOfStrategies from "./views/ListOfStrategies";
import StrategyContext from "./views/StrategyContext";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Fragment>
        {/* <StrategyView /> */}
        <Routes>
          <Route path="/" element={<StrategyView />} />
          <Route path="/listofstrategies" element={<ListOfStrategies />} />
          <Route path="/strategycontext" element={<StrategyContext />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
