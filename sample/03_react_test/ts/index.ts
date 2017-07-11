import * as React from "react";
import * as ReactDOM from "react-dom";

import { StateComponent } from "./component";

ReactDOM.render(
    React.createElement(StateComponent, {}),
    document.getElementById("target")
);
