// Type definitions for tarai v0.0.6
// Project: https://github.com/inabe49/tarai
// Definitions by: inabe49 <https://github.com/inabe49>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />


declare module "tarai" {
    interface StatePipe<S> {
        getState(): S;
        setState(next: S): void;
    }

    class ActionEvent<S, T> {
        constructor(pipe: StatePipe<S>);

        public fire(arg: T): void;
        public bind(context: any, callback: (arg: T, current: S, update: (next: S) => void) => void): void;
    }


    class Dispatcher<S> {
        protected pipe: StatePipe<S>;

        constructor(pipe: StatePipe<S>);
    }


    abstract class Store<S, P, D extends Dispatcher<S>> {
        constructor();

        protected getStatePipe(): StatePipe<S>;
        protected setCondition(state: S, dispatcher: D);

        public abstract toProps(state: S, dispatcher: D): P;

        public onUpdate(callback: (next: P) => void): () => void;
        public init(): void;
    }

    function bind<S, P, D extends Dispatcher<S>>(element: HTMLElement, store: Store<S, P, D>, createElement: (props: P) => __React.ReactElement<P>);
}
