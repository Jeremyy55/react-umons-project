//import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Intro from "./Intro";
import * as serviceWorker from "./serviceWorker";
import { makeMainRoutes } from "./routes";

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
