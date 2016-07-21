import { Action, createAction, Dispatcher } from "../../../../../src/tarai";



export class TodoTitleEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onUpdateTitle = createAction<string>();
        this.onFocus = createAction<{}>();
        this.onBlur = createAction<{}>();
    }

    public onUpdateTitle: Action<string>;
    public onFocus: Action<{}>;
    public onBlur: Action<{}>;

    public updateTitle(next: string) {
        this.onUpdateTitle(next);
    }

    public focus() {
        this.onFocus({});
    }

    public blur() {
        this.onBlur({});
    }
}
