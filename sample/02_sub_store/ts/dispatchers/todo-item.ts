import { ActionEvent, Dispatcher } from "../../../../src/tarai";


export class TodoItemEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onUpdateTitle = new ActionEvent<string>();
        this.onUpdateBody = new ActionEvent<string>();
    }


    public onUpdateTitle: ActionEvent<string>;
    public onUpdateBody: ActionEvent<string>;

    public updateTitle(next: string) {
        this.onUpdateTitle.fire(next);
    }

    public updateBody(next: string) {
        this.onUpdateBody.fire(next);
    }
}
