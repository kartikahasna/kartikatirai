/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
import ReactDOM = require("react-dom");
import React = require("react");

import { Action } from "./action";
import { Dispatcher } from "./dispatcher";
import { Store } from "./store";
import { Props } from "./property";


export function bind<P extends Props>(element: HTMLElement, store: Store<P>, createElement: (props: P) => React.ReactElement<P>) {
    store.onUpdate((next: P) => {
        ReactDOM.render(
            createElement(next),
            element
        );
    });

    store.init();
}
