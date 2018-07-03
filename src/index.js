import React from "react";
import ReactDOM from "react-dom";

// import { LoadingExample } from "./loading";
import { SuspenseExample } from "./suspense";

import "./styles.css";

const App = () => {
  // const template = <LoadingExample />;
  const template = <SuspenseExample />;

  return <div className="App">{template}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
