// Type definitions for tarai v0.0.5
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

    interface Dispatcher {
        (action: Action): void;
    }


    interface Props {
        dispatcher?: Dispatcher;
    }


    abstract class Store<P extends Props> {
        constructor(defalutProps: P);

        onUpdate(callback: (next: P) => void);
        init();

        bindAction<A extends Action>(type: string, callback: (action: A, current: P, update: (next: P) => void) => void);
    }



    function bind<P extends Props>(element: HTMLElement, store: Store<P>, createElement: (props: P) => __React.ReactElement<P>);
}
