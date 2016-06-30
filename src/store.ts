/// <reference path="../typings/object-assign/object-assign.d.ts" />
import objectAssign = require('object-assign');

import { Callback } from "./callback";
import { Action } from "./action";
import { Dispatcher, createDispatcher } from "./dispatcher";
import { Props } from "./property";

import { createContextBindedCallback } from "./utils";


export abstract class Store<P extends Props> {
    private _props: P;
    private _dispatcher: (action: Action) => void;
    private _update: (next: P) => void;

    private _callback: Callback<P>;
    private _actions: {[key: string]: (action: Action, current: P, update: (next: P) => void) => void};



    constructor(defalutProps: P) {
        this._update = createContextBindedCallback<P>(this, (next: P) => {
            this._props = objectAssign({}, this._props, next); // Object.assign
            this.setDispatcher(this._props, this._dispatcher);

            this._callback.fire(this._props);
        });

        this._dispatcher = createContextBindedCallback<Action>(this, (action: Action) => {
            const callback = this._actions[action.type];

            if (callback) {
                callback.apply(this, [action, this._props, this._update]);
            } else {
                console.error("unknown action type!! : " + action.type);
            }
        });

        this._callback = new Callback<P>();

        this._props = defalutProps;

        this.setDispatcher(this._props, this._dispatcher);

        this._actions = {};
    }

    abstract setDispatcher(current: P, dispatcher: Dispatcher): void;

    onUpdate(callback: (next: P) => void) {
        this._callback.add(callback);
    }


    init() {
        this._callback.fire(this._props);
    }



    bindAction<A extends Action>(type: string, callback: (action: A, current: P, update: (next: P) => void) => void) {
        if (!this._actions) {
            this._actions = {};
        }

        if (this._actions[type]) {
            console.error("already binded Action type : " + type);
            return;
        }

        this._actions[type] = callback;
    }
}
