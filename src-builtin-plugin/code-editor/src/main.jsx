import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.module.css";
import { defineMicroApp } from "@micro-web/sub";

export default defineMicroApp((container) => {
  function render(props) {
    ReactDOM.createRoot(container).render(<App {...props} />);
  }
  return {
    mount: render,
    render: render,
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
});
