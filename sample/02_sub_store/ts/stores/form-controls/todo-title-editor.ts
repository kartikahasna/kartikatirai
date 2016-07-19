import { ActionEvent, Connector, SubStore } from "../../../../../src/tarai";

import { TodoTitleEditorState, createTodoTitleEditorState, updateTodoTitleEditorState } from "../../state/form-controls/todo-title-editor";
import { TodoTitleEditorDispatcher } from "../../dispatchers/form-controls/todo-title-editor";
import { TodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";

import { TodoTitleEditorConnector } from "../../connectors/form-controls/todo-title-editor";


export class TodoTitleEditorStore extends SubStore<TodoTitleEditorConnector, TodoTitleEditorState, TodoTitleEditorProps> {
    private _dispatcher: TodoTitleEditorDispatcher;

    constructor() {
        const state: TodoTitleEditorState = createTodoTitleEditorState("");
        super(state);

        this._dispatcher = new TodoTitleEditorDispatcher();
        this._dispatcher.onUpdateTitle.bind(this, this.onUpdateTitle);
        this._dispatcher.onFocus.bind(this, this.onFocus);
        this._dispatcher.onBlur.bind(this, this.onBlur);
    }


    public toProps(state: TodoTitleEditorState): TodoTitleEditorProps {
        return {
            title: state.title,
            isValid: state.isValid,
            hasFocused: state.hasFocused,

            dispatcher: this._dispatcher,
        };
    }

    public toViewSate(inner: TodoTitleEditorState): TodoTitleEditorProps {
        return {
            title: inner.title,
            isValid: inner.isValid,
            hasFocused: inner.hasFocused,

            dispatcher: this._dispatcher,
        };
    }


    protected onInjectConnector(connector: TodoTitleEditorConnector): () => void {

        return () => {

        };
    }


    public onUpdateTitle(next: string) {
        this.setInnerState(updateTodoTitleEditorState(this.getInnerState(), next));
    }

    public onFocus(arg: {}) {
        this.setInnerState({
            hasFocused: true,
        });
    }

    public onBlur(arg: {}) {
    }
}
