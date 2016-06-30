import { Action, bind, Dispatcher, Store, Props } from "../../src/tarai";

export const STOP_SPIN = "STOP_SPIN";
export const START_SPIN = "START_SPIN";

export interface SimpleProperty extends Props {
    isSpin?: boolean;
}


export class SimpleStore extends Store<SimpleProperty> {
    constructor() {
        super({
            isSpin: true,
        });

        this.bindAction<Action>(START_SPIN, this.onStartSpin);
        this.bindAction<Action>(STOP_SPIN, this.onStopSpin);
    }

    setDispatcher(current: SimpleProperty, dispatcher: Dispatcher): void {
        current.dispatcher = dispatcher;
    }

    public onStartSpin(action: Action, current: SimpleProperty, update: (next: SimpleProperty) => void) {
        const next: SimpleProperty = {
            isSpin: true,
        };

        update(next);
    }

    public onStopSpin(action: Action, current: SimpleProperty, update: (next: SimpleProperty) => void) {
        const next: SimpleProperty = {
            isSpin: false,
        };

        update(next);
    }
}
