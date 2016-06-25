

export class Callback<T> {
    private _callbacks: ((arg: T) => void)[];

    constructor() {
        this._callbacks = [];
    }

    add(callback: (arg: T) => void): void {
        this._callbacks.push(callback);
    }

    remove(callback: (arg: T) => void): void {
        for (let i = 0; i < this._callbacks.length; i++) {
            if (this._callbacks[i] === callback) {
                this._callbacks.splice(i, 1);
            }
        }
    }

    fire(arg: T): void {
        for (let i = 0; i < this._callbacks.length; i++) {
            this._callbacks[i](arg);
        }
    }

    clear(): void {
        this._callbacks = [];
    }
}
