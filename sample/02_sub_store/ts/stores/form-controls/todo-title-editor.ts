import { Action, createAction, Connector, SubStore } from "../../../../../src/tarai";

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
        this._dispatcher.onUpdateTitle(this, this.onUpdateTitle);
        this._dispatcher.onFocus(this, this.onFocus);
        this._dispatcher.onBlur(this, this.onBlur);
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
        connector.validate(this, this.onValidate);

        return () => {

        };
    }

    public onValidate(arg: {}) {

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
        const state = this.getInnerState();
        const connector = this.getConnector();

        connector.change({
            value: state.title,
            isValid: state.isValid,
        });
    }
}
