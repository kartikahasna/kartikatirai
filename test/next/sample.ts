import { ActionCallback, bind, Dispatcher, PropsBinder, Store } from "../../src/next/tarai";


export interface SpinProps {
    isSpin?: boolean;
}


export class SpinDispatcher extends Dispatcher<SpinProps> {
    constructor(props: PropsBinder<SpinProps>) {
        super(props);

        this.onStartSpin = new ActionCallback<SpinProps, {}>(props);
        this.onStopSpin = new ActionCallback<SpinProps, {}>(props);
    }

    public onStartSpin: ActionCallback<SpinProps, {}>;

    public onStopSpin: ActionCallback<SpinProps, {}>;


    public startSpin() {
        this.onStartSpin.fire({});
    }

    public stopSpin() {
        this.onStopSpin.fire({});
    }
}


export class SpinStore extends Store<SpinProps, SpinDispatcher> {
    setDispatcher(current: SpinProps, dispatcher: SpinDispatcher): void {

    }

}
