/// <reference path="../../../typings/react/react.d.ts" />
/// <reference path="../../../typings/react/react-dom.d.ts" />
import ReactDOM = require("react-dom");
import React = require("react");

import { Action, createAction, bind, Dispatcher, StatePipe, Store } from "../../../src/tarai";
import { Spin } from "./spin";

export interface SpinState {
    isSpin?: boolean;
}

export interface SpinProps extends SpinState {
    dispatcher?: SpinDispatcher;
}


export class SpinDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onStartSpin = createAction();
        this.onStopSpin = createAction();
    }

    public onStartSpin: Action<{}>;
    public onStopSpin: Action<{}>;


    public startSpin() {
        this.onStartSpin({});
    }

    public stopSpin() {
        this.onStopSpin({});
    }
}


export class SpinStore extends Store<SpinState, SpinProps> {
    private _dispatcher: SpinDispatcher;

    constructor(isSpin: boolean) {
        const state: SpinState = {
            isSpin: isSpin,
        };

        super(state);

        this._dispatcher = new SpinDispatcher();
        this._dispatcher.onStartSpin.bind(this, this.onStartSpin);
        this._dispatcher.onStopSpin.bind(this, this.onStopSpin);
    }

    toProps(state: SpinState): SpinProps {
        return {
            isSpin: state.isSpin,
            dispatcher: this._dispatcher,
        };
    }

    public onStopSpin(action: {}) {
        const pipe = this.getStatePipe();

        pipe.setState({
            isSpin: false,
        });
    }

    public onStartSpin(action: {}) {
        const pipe = this.getStatePipe();

        pipe.setState({
            isSpin: true,
        });
    }
}


console.log("start");

bind(document.getElementById("target"), new SpinStore(true), (next: SpinProps) => {
     return React.createElement(Spin, next);
});
