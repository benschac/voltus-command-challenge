import React from "react";
import {render} from "react-dom";
import Root from "./components/Root";

import "./styles/index.global.css";

// Entry point for the application
render(<Root />, document.querySelector("#injection"));
