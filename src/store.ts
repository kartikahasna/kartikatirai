/// <reference path="../typings/object-assign/object-assign.d.ts" />
import objectAssign = require("object-assign");

import { StatePipe } from "./action";
import { Callback } from "./callback";
import { Dispatcher } from "./dispatcher";



export abstract class Store<S, P> {
    private _state: S;
    private _onUpdate: Callback<P>;

    private _updateState(next: S) {
        this._state = objectAssign({}, this._state, next);

        const props = this.toProps(this._state);
        this._onUpdate.fire(props);
    }

    constructor(state: S) {
        this._onUpdate = new Callback<P>();
        this._state = state;
    }

    protected getStatePipe(): StatePipe<S> {
        const that = this;

        return {
            getState: () => { return that._state; },
            setState: (next: S) => { that._updateState.apply(that, [next]); },
        };
    }

    public abstract toProps(state: S): P;


    public onUpdate(callback: (next: P) => void): () => void {
        return this._onUpdate.add(this, callback);
    }

    public init(): void {
        const props = this.toProps(this._state);

        this._onUpdate.fire(props);
    }
}
