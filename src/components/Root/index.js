import React from "react";
import App from "../App";
import {Provider} from "react-redux";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { connectRouter, ConnectedRouter, routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
// Evan, I heard you loud and clear during the interview.
// I too like saga, but I need to dig in a bit more and learn how it works.
// Going to try and keep things simple for the moment ;)
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import rootReducer from "../../reducers";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(logger, thunk)
);

/**
 * The Root of the Application
 * 
 * @class Root
 */
function Root(){
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Route path="/" component={App}/>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default Root;