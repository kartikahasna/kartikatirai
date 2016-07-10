
import { PropsBinder } from "./action";



export class Dispatcher<P> {
    protected props: PropsBinder<P>;

    constructor(props: PropsBinder<P>) {
        this.props = props;
    }
}
