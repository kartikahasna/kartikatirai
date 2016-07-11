/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import ReactDOM = require("react-dom");
import React = require("react");

import { ActionEvent, bind, Dispatcher, StatePipe, Store } from "../../src/next2/tarai";
import { Spin } from "./spin";

export interface SpinState {
    isSpin?: boolean;
}

export interface SpinProps extends SpinState {
    dispatcher?: SpinDispatcher;
}


export class SpinDispatcher extends Dispatcher<SpinState> {
    constructor(pipe: StatePipe<SpinState>) {
        super(pipe);

        this.onStartSpin = new ActionEvent<SpinState, {}>(this.pipe);
        this.onStopSpin = new ActionEvent<SpinState, {}>(this.pipe);
    }

    public onStartSpin: ActionEvent<SpinState, {}>;
    public onStopSpin: ActionEvent<SpinState, {}>;


    public startSpin() {
        this.onStartSpin.fire({});
    }

    public stopSpin() {
        this.onStopSpin.fire({});
    }
}


export class SpinStore extends Store<SpinState, SpinProps, SpinDispatcher> {
    constructor(isSpin: boolean) {
        super();

        const state: SpinState = {
            isSpin: isSpin,
        };

        const dispatcher: SpinDispatcher = new SpinDispatcher(this.getStatePipe());

        this.setCondition(state, dispatcher);

        dispatcher.onStartSpin.bind(this, this.onStartSpin);
        dispatcher.onStopSpin.bind(this, this.onStopSpin);
    }

    toProps(state: SpinState, dispatcher: SpinDispatcher): SpinProps {
        return {
            isSpin: state.isSpin,
            dispatcher: dispatcher,
        };
    }

    public onStopSpin(action: {}, current: SpinState, update: (next: SpinState) => void) {
        update({
            isSpin: false,
        });
    }

    public onStartSpin(action: {}, current: SpinState, update: (next: SpinState) => void) {
        update({
            isSpin: true,
        });
    }
}


console.log("start");

bind(document.getElementById("target"), new SpinStore(true), (next: SpinProps) => {
     return React.createElement(Spin, next);
});
