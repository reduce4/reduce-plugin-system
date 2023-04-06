import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Button } from "antd";
const output = `
"use strict";
var Hello = function Hello() {
  return /*#__PURE__*/React.createElement(Button, null, "hello");
};
Hello();
`;
ReactDOM.createRoot(document.getElementById("root")).render(eval(output));
