import { StatePipe, ActionEvent } from "./action";



export class Dispatcher<S> {
    protected pipe: StatePipe<S>;

    constructor(pipe: StatePipe<S>) {
        this.pipe = pipe;
    }
}
