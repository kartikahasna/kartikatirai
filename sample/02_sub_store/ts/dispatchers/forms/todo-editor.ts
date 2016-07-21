import { Action, createAction, Dispatcher } from "../../../../../src/tarai";

import {} from "../../state/forms/todo-editor";


export class TodoEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.onDeleteTodo = createAction<{}>();
        this.onUpdateTodo = createAction<{}>();
    }

    public onDeleteTodo: Action<{}>;
    public onUpdateTodo: Action<{}>;

    public deleteTodo() {
        this.onDeleteTodo({});
    }

    public updateTodo() {
        this.onUpdateTodo({});
    }
}
