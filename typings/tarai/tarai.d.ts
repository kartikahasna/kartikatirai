// Type definitions for tarai v0.0.1
// Project: https://github.com/inabe49/tarai
// Definitions by: inabe49 <https://github.com/inabe49>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />


declare module "tarai" {
    class Callback<T> {
        constructor();

        add(callback: (arg: T) => void): void;
        remove(callback: (arg: T) => void): void;
        fire(arg: T): void;

        clear(): void;
    }

    interface Action {
        type?: string;
    }

    class Dispatcher {
        constructor(context: any, dispatched: (action: Action) => void);
        public exec(action: Action);
    }


    interface Props {
        dispatcher?: Dispatcher;
    }


    abstract class Store<P extends Props> {
        constructor(defalutProps: P);

        abstract onDispatched(action: Action, current: P): void;

        protected update(next: P): void;

        onUpdate(callback: (next: P) => void);
        init();
    }



    function bind<P extends Props>(element: HTMLElement, store: Store<P>, createElement: (props: P) => __React.ReactElement<P>);
}
