import { ActionEvent, Dispatcher } from "../../../../../src/tarai";



export class TodoTitleEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onUpdateTitle = new ActionEvent<string>();
        this.onFocus = new ActionEvent<{}>();
        this.onBlur = new ActionEvent<{}>();
    }

    public onUpdateTitle: ActionEvent<string>;
    public onFocus: ActionEvent<{}>;
    public onBlur: ActionEvent<{}>;

    public updateTitle(next: string) {
        this.onUpdateTitle.fire(next);
    }

    public focus() {
        this.onFocus.fire({});
    }

    public blur() {
        this.onBlur.fire({});
    }
}
