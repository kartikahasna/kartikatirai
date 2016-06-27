import { Action } from "./action";


export interface Dispatcher {
    (action: Action): void;
}


export function createDispatcher(context: any, dispatched: (action: Action) => void): Dispatcher {
    return (action: Action) => {
        dispatched.apply(context, [action]);
    };
}
