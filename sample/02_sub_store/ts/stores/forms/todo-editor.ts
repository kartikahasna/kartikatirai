import { Store } from "../../../../../src/tarai";

import { TodoItem } from "../../model";

import { TodoEditorState, createTodoEditorState } from "../../state/forms/todo-editor";
import { TodoEditorDispatcher } from "../../dispatchers/forms/todo-editor";
import { TodoEditorProps } from "../../props/forms/todo-editor";


export class TodoEditorStore extends Store<TodoEditorState, TodoEditorProps> {
    private _dispatcher: TodoEditorDispatcher;

    constructor(todo: TodoItem) {
        const state: TodoEditorState = createTodoEditorState(todo);
        super(state);

        this._dispatcher = new TodoEditorDispatcher();
        this._dispatcher.onDeleteTodo.bind(this, this.onDeleteTodo);
        this._dispatcher.onUpdateTodo.bind(this, this.onUpdateTodo);
    }


    public toProps(state: TodoEditorState): TodoEditorProps {
        return {
            title: state.title,

            isDeleting: state.isDeleting,
            isUpdating: state.isUpdating,

            dispatcher: this._dispatcher,
        };
    }


    public onDeleteTodo(arg: {}) {
        this.setState({
            isDeleting: true,
        });
    }


    public onUpdateTodo(arg: {}) {
        this.setState({
            isUpdating: true,
        });
    }
}
