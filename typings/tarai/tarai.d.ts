// Type definitions for tarai v0.0.8
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

    class ActionEvent<T> {
        constructor();

        public fire(arg: T): void;
        public bind(context: any, callback: (arg: T) => void): () => void;
    }


    class Dispatcher {
        constructor();
    }


    abstract class Store<S, P> {
        constructor(state: S);

        protected getStatePipe(): StatePipe<S>;
        protected getState(): S;
        protected setState(next: S): void;

        public abstract toProps(state: S): P;

        public onUpdate(callback: (next: P) => void): () => void;
        public init(): void;
    }

    function bind<S, P>(element: HTMLElement, store: Store<S, P>, createElement: (props: P) => __React.ReactElement<P>);
}
