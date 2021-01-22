import React from "react";
import "./App.css";
import View from "./components/View.js";
import Delete from "./components/Delete.js";
import Register from "./components/Register.js";
import MainMenu from "./components/MainMenu.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Excedent = () => {
  return (
    <>
      <div className="Excedent">
        <Router>
          <Switch>
            <Route path="/" exact component={MainMenu} />

            <Route path="/register" component={Register} />

            <Route path="/view" component={View} />

            <Route path="/delete" component={Delete} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Excedent;
