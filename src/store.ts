import { Callback } from "./callback";
import { Dispatcher } from "./dispatcher";

import { merge } from "./utils/merge";

export interface StatePipe<S> {
    getState(): S;
    setState(next: S): void;
}



export abstract class Store<S, P> {
    private _state: S;
    private _onUpdate: Callback<P>;

    private _updateState(next: S) {
//        console.log("_updateState");
//        console.log(this._state);

        this._state = merge<S>(this._state, next);

        const props = this.toProps(this._state);
        this._onUpdate.fire(props);

//        console.log(next);
//        console.log(this._state);
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

    protected getState(): S {
        return this._state;
    }

    protected setState(next: S): void {
        this._updateState(next);
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
