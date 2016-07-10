

export interface PropsBinder<P> {
    getProps(): P;
    setProps(next: P): void;
}



export class ActionCallback<P, T> {
    private _props: PropsBinder<P>;

    private _context: any;
    private _callback: (arg: T, current: P, update: (next: P) => void) => void;

    constructor(props: PropsBinder<P>) {
        this._props = props;
    }


    public fire(arg: T): void {
        // bind された callback を叩く
        if (this._callback) {
            this._callback.apply(this._context, [arg, this._props.getProps(), this._props.setProps]);
        } else {
            console.error("no callback : ActionCallback");
        }
    }


    public bind(context: any, callback: (arg: T, current: P, update: (next: P) => void) => void): void {
        // current : 呼びだされた時点での、Store の Property
        // update : Store に更新を伝える
        this._context = context;
        this._callback = callback;
    }
}
