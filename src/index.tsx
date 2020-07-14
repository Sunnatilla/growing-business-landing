import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ReactGA from "react-ga";
import * as serviceWorker from "./serviceWorker";
import "./i18next";
import Loading from "./components/Loading";

ReactGA.initialize("UA-22343418-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
serviceWorker.unregister();
