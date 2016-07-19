/// <reference path="../../typings/object-assign/object-assign.d.ts" />
import objectAssign = require("object-assign");

import { Callback } from "../callback";
import { StatePipe } from "../action";

import { Connector } from "./interface";


export abstract class SubStore<C extends Connector, IS, VS> {
    private _innerState: IS;
    private _connector: C;
    private _connectorUnbinder: () => void;
    private _onUpdate: Callback<VS>;

    private _updateInnerState(next: IS) {
        this._innerState = objectAssign({}, this._innerState, next);

        const vs = this.toViewSate(this._innerState);
        this._onUpdate.fire(vs);
    }


    constructor(innerState: IS) {
        this._innerState = innerState;
        this._onUpdate = new Callback<VS>();
    }


    protected getInnerStatePipe(): StatePipe<IS> {
        const that = this;

        return {
            getState: () => { return that._innerState; },
            setState: (next: IS) => { that._updateInnerState.apply(that, [next]); },
        };
    }

    protected getInnerState(): IS {
        return this._innerState;
    }

    protected setInnerState(next: IS): void {
        this._updateInnerState(next);
    }


    public onUpdate(callback: (next: VS) => void): () => void {
        return this._onUpdate.add(this, callback);
    }


    public getViewState(): VS {
        return this.toViewSate(this.getInnerState());
    }

    public getConnector(): C {
        return this._connector;
    }

    public injectConnector(connector: C) {
        if (this._connectorUnbinder) {
            this._connectorUnbinder();
        }

        this._connectorUnbinder = this.onInjectConnector(connector);
        this._connector = connector;
    }

    public abstract toViewSate(inner: IS): VS;
    protected abstract onInjectConnector(connector: C): () => void;
}
