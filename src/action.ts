import { Callback } from "./callback";

export interface StatePipe<S> {
    getState(): S;
    setState(next: S): void;
}


export class ActionEvent<T> {
    private _callback: Callback<T>;

    constructor() {
        this._callback = new Callback<T>();
    }

    public fire(arg: T): void {
        this._callback.fire(arg);
    }


    public bind(context: any, callback: (arg: T) => void): () => void {
        return this._callback.add(context, callback);
    }
}
