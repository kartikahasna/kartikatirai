import { Store } from "../../../../../src/tarai";

import { TodoEditorDispatcher, TodoEditorProps } from "../../props/forms/todo-editor";
import { TodoTitleEditorDispatcher, TodoTitleEditorProps, createTodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";

import { TodoItem } from "../../model";
import { TodoTitleEditorState, createTodoTitleEditorState } from "../../state/form-controls/todo-title-editor";
import { TodoEditorState, createTodoEditorState } from "../../state/forms/todo-editor";


export class TodoEditorStore extends Store<TodoEditorState, TodoEditorProps> {
    private _dispatcher: TodoEditorDispatcher;
    private _titleDispatcher: TodoTitleEditorDispatcher;

    constructor(todo: TodoItem) {
        const state: TodoEditorState = createTodoEditorState(todo);
        super(state);

        this._dispatcher = new TodoEditorDispatcher();
        this._dispatcher.deleteTodo(this, this.onDeleteTodo);
        this._dispatcher.updateTodo(this, this.onUpdateTodo);

        this._titleDispatcher = new TodoTitleEditorDispatcher();
        this._titleDispatcher.updateTitle(this, this.onUpdateTitle);
        this._titleDispatcher.focus(this, this.onFocusTitle);
    }


    public toProps(state: TodoEditorState): TodoEditorProps {
        return {
            title: createTodoTitleEditorProps(state.title, this._titleDispatcher),

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


    public onUpdateTitle(next: string) {
        const state = this.getState();

        this.setState({
            title: createTodoTitleEditorState(next, state.title.shouldValidate),
        });
    }

    public onFocusTitle(arg: {}) {
        const state = this.getState();

        this.setState({
            title: createTodoTitleEditorState(state.title.title, true),
        });
    }
}
