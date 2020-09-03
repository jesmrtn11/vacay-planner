import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import * as pages from "./pages";
import store from "./store";
import { init } from "./actions";
import "./App.scss";

init();

export default () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <Link to="/">HomePage</Link>
            <Link to="/calendar">Calendar</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={pages.StartPage}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
