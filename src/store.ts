import { Callback } from "./callback";
import { Action } from "./action";
import { Dispatcher, createDispatcher } from "./dispatcher";
import { Props } from "./property";

export abstract class Store<P extends Props> {
    private _props: P;
    private _dispatcher: Dispatcher;
    private _callback: Callback<P>;

    private _dispatched(action: Action): void {
        this.onDispatched(action, this._props);
    }


    constructor(defalutProps: P) {
        this._dispatcher = createDispatcher(this, this._dispatched);
        this._callback = new Callback<P>();

        this._props = defalutProps;
        this._props.dispatcher = this._dispatcher;
    }


    abstract onDispatched(action: Action, current: P): void;

    protected update(next: P): void {
        // 内部のステータスが更新された
        // View に渡すためのイベントを叩く
        this._props = next;
        this._props.dispatcher = this._dispatcher;

        this._callback.fire(this._props);
    }

    onUpdate(callback: (next: P) => void) {
        this._callback.add(callback);
    }


    init() {
        this._callback.fire(this._props);
    }
}
