import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import * as pages from "./pages";
import "./App.scss";

export default () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <Link to="/">Foo</Link>
            <Link to="/user">User</Link>
          </nav>
          <Switch>
            <Route path="/"    exact component={pages.Foo}/>
            <Route path="/user" exact component={pages.User}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
