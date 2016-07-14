import { ActionEvent, Dispatcher } from "../../../../../src/tarai";

import {} from "../../state/forms/todo-editor";


export class TodoEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onDeleteTodo = new ActionEvent<{}>();
        this.onUpdateTodo = new ActionEvent<{}>();
    }

    public onDeleteTodo: ActionEvent<{}>;
    public onUpdateTodo: ActionEvent<{}>;

    public deleteTodo() {
        this.onDeleteTodo.fire({});
    }

    public updateTodo() {
        this.onUpdateTodo.fire({});
    }
}
