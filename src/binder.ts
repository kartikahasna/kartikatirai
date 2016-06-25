/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />

import ReactDOM = require("react-dom");
import React = require("react");

import { Action, Dispatcher } from "./dispatcher";
import { Props, Store } from "./store";


export function bind<P extends Props>(createElement: (props: P) => React.ReactElement<P>, store: Store<P>, element: HTMLElement) {
    store.onUpdate((next: P) => {
        ReactDOM.render(
            createElement(next),
            element
        );
    });

    store.init();
}
