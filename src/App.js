import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import DonorPage from "./components/DonorPage";
import Homepage from "./components/Homepage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/donate" component={DonorPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
