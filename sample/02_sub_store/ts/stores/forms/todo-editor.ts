import { Store } from "../../../../../src/tarai";

import { TodoItem } from "../../model";

import { TodoEditorState, createTodoEditorState } from "../../state/forms/todo-editor";
import { TodoEditorDispatcher } from "../../dispatchers/forms/todo-editor";
import { TodoEditorProps } from "../../props/forms/todo-editor";

import { TodoTitleEditorConnector } from "../../connectors/form-controls/todo-title-editor";



export class TodoEditorStore extends Store<TodoEditorState, TodoEditorProps> {
    private _dispatcher: TodoEditorDispatcher;

    private _titleConnector: TodoTitleEditorConnector;

    constructor(todo: TodoItem) {
        const state: TodoEditorState = createTodoEditorState(todo);
        super(state);

        this._dispatcher = new TodoEditorDispatcher();
        this._dispatcher.onDeleteTodo.bind(this, this.onDeleteTodo);
        this._dispatcher.onUpdateTodo.bind(this, this.onUpdateTodo);

        this._titleConnector = new TodoTitleEditorConnector();
        this._titleConnector.change(this, this.onTitleChange);
    }


    public toProps(state: TodoEditorState): TodoEditorProps {
        return {
            title: state.title,

            isDeleting: state.isDeleting,
            isUpdating: state.isUpdating,

            dispatcher: this._dispatcher,

            titleConnector: this._titleConnector,
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

    public onTitleChange(arg: { value: string, isValid: boolean }) {
        this.setState({
            title: arg.value,
        });
    }
}
