


export interface StatePipe<S> {
    getState(): S;
    setState(next: S): void;
}


export interface State {

}

export class ActionEvent<S, T> {
    public fire(arg: T): void {
        // bind された callback を叩く
    }


    public bind(context: any, callback: (arg: T, current: S, update: (next: S) => void) => void): void {
    }
}

export class Dispatcher<S> {

}


export abstract class Store<S, P, D> {
    private _state: S;

    private _updateState() {
    }


    protected getStatePipe<S>(): StatePipe<S> {
        return null;
    }

    public abstract toProps(state: S, dispatcher: D): P;


    public onUpdate(callback: (next: P) => void): () => void {
        return null;
    }

    public init(): void {
    }


}
