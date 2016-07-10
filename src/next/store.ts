/// <reference path="../../typings/object-assign/object-assign.d.ts" />
import objectAssign = require("object-assign");

import { Callback } from "./callback";
import { PropsBinder } from "./action";
import { Dispatcher } from "./dispatcher";



export abstract class Store<P, D extends Dispatcher<P>> {
    protected _dispatcher: D;

    private _props: P;

    private _onUpdate: Callback<P>;

    constructor(props: P, dispatcher: D) {
        this._onUpdate = new Callback<P>();

    }


    private _getProps(): P {
        return this._props;
    }

    private _setProps(next: P): void {
         // Object.assign
        this._props = objectAssign({}, this._props, next);

        this.setDispatcher(this._props, this._dispatcher);

        this._onUpdate.fire(this._props);
    }

    protected getPropsBinder(): PropsBinder<P> {
        const that = this;
        const getProps: () => P = () => {
            return that._getProps.apply(that, []);
        };

        const setProps: (next: P) => void = (next: P) => {
            that._setProps.apply(that, [next]);
        };

        return {
            getProps: getProps,
            setProps: setProps,
        };
    }

    abstract setDispatcher(current: P, dispatcher: D): void;


    public onUpdate(callback: (next: P) => void): () => void {
        return this._onUpdate.add(this, callback);
    }

    public init(): void {
        this._onUpdate.fire(this._props);
    }
}
