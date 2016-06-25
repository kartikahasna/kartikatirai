
export interface Action {
    type?: string;
}

export class Dispatcher {
    private _context: any;
    private _dispatched: (action: Action) => void;

    constructor(context: any, dispatched: (action: Action) => void) {
        this._context = context;
        this._dispatched = dispatched;
    }

    public exec(action: Action) {
        this._dispatched.apply(this._context, [action]);
    }
}
