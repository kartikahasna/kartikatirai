import * as ReactDOM from "react-dom";
import * as React from "react";

import { Action, createAction, bind, Dispatcher, StatePipe, Store } from "../../../src/main";
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

        this.startSpin = createAction();
        this.stopSpin = createAction();
    }

    public startSpin: Action<{}>;
    public stopSpin: Action<{}>;
}


export class SpinStore extends Store<SpinState, SpinProps> {
    private _dispatcher: SpinDispatcher;

    constructor(isSpin: boolean) {
        const state: SpinState = {
            isSpin: isSpin,
        };

        super(state);

        this._dispatcher = new SpinDispatcher();
        this._dispatcher.startSpin(this, this.onStartSpin);
        this._dispatcher.stopSpin(this, this.onStopSpin);
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
