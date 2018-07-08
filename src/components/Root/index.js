import React from 'react';
import App from '../App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
// Evan, I heard you loud and clear during the interview.
// I too like saga, but I need to dig in a bit more and learn how it works.
// Going to try and keep things simple for the moment ;)
import thunk from "redux-thunk";
import rootReducer from "../../reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

/**
 * The Root of the Application
 * 
 * @class Root
 */
function Root(){
  return [
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  ]
}

export default Root;