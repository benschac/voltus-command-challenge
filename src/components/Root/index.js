import React from 'react';
import App from '../App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../reducers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const store = createStore(rootReducer);

/**
 * The Root of the Application
 * 
 * @class Root
 */
function Root(){
  return [
    <Provider store={store}>
      <Route path="/" component={App}/>
    </Provider>
  ]
}

export default Root;