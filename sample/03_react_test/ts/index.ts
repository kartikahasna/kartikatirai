/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-dom.d.ts"/>
import React = require("react");
import ReactDOM = require("react-dom");

import { StateComponent } from "./component";

ReactDOM.render(
    React.createElement(StateComponent, {}),
    document.getElementById("target")
);
