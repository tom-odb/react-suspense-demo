import React from "react";
import ReactDOM from "react-dom";

import { LoadingExample } from "./loading";
import { SuspenseExample } from "./suspense";

import "./styles.css";

const App = () => {
  // add some animation stuff
  const keyframes = `
    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
  `;
  const stylesheet = document.styleSheets[0];
  stylesheet.insertRule(keyframes, stylesheet.cssRules.length);

  const template = <LoadingExample />;
  // const template = <SuspenseExample />;

  return <div className="App">{template}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
