import React, { Fragment } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as pages from "./pages";
import { Modal } from "./components";
import store from "./store";
import { init } from "./actions";
import "./App.scss";

init();

export default () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Fragment>
          <Modal/>
          <BrowserRouter>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={pages.StartPage}/>
              <Route path="/login"  component={pages.Login} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      </Provider>
    </div>
  );
}
