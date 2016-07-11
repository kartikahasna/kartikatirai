import { Callback } from "./callback";

export interface StatePipe<S> {
    getState(): S;
    setState(next: S): void;
}


export class ActionEvent<S, T> {
    private _pipe: StatePipe<S>;
    private _context: any;
    private _callback: (arg: T, current: S, update: (next: S) => void) => void;

    constructor(pipe: StatePipe<S>) {
        this._pipe = pipe;
    }

    public fire(arg: T): void {
        // bind された callback を叩く
        if (this._callback) {
            this._callback.apply(this._context, [arg, this._pipe.getState(), this._pipe.setState]);
        } else {
            console.error("ActionEvent not binded");
        }
    }


    public bind(context: any, callback: (arg: T, current: S, update: (next: S) => void) => void): void {
        this._context = context;
        this._callback = callback;
    }
}
