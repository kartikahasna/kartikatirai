/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import { ActionEvent, Dispatcher, StatePipe, Store } from "../../src/tarai";
export interface SpinState {
    isSpin?: boolean;
}
export interface SpinProps extends SpinState {
    dispatcher?: SpinDispatcher;
}
export declare class SpinDispatcher extends Dispatcher<SpinState> {
    constructor(pipe: StatePipe<SpinState>);
    onStartSpin: ActionEvent<SpinState, {}>;
    onStopSpin: ActionEvent<SpinState, {}>;
    startSpin(): void;
    stopSpin(): void;
}
export declare class SpinStore extends Store<SpinState, SpinProps, SpinDispatcher> {
    constructor(isSpin: boolean);
    toProps(state: SpinState, dispatcher: SpinDispatcher): SpinProps;
    onStopSpin(action: {}, current: SpinState, update: (next: SpinState) => void): void;
    onStartSpin(action: {}, current: SpinState, update: (next: SpinState) => void): void;
}
