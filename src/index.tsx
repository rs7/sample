import React from "react";
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import {Application} from "./components/application/Application";

hot(module)(Application);

ReactDOM.render(<Application/>, document.getElementById("root"));
