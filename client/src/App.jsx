import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          <Switch>
            <Route path="/" exact component={pages.StartPage}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
