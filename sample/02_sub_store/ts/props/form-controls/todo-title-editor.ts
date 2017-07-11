import * as React from "react";

import { Action, createAction, Dispatcher } from "../../../../../src/main";

import { TodoTitleEditorState } from "../../state/form-controls/todo-title-editor";


export class TodoTitleEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.updateTitle = createAction<string>();
        this.focus = createAction<{}>();
        this.blur = createAction<{}>();
    }

    public updateTitle: Action<string>;
    public focus: Action<{}>;
    public blur: Action<{}>;
}


export interface TodoTitleEditorProps extends TodoTitleEditorState {
    dispatcher: TodoTitleEditorDispatcher;
}


export function createTodoTitleEditorProps(state: TodoTitleEditorState, dispatcher: TodoTitleEditorDispatcher): TodoTitleEditorProps {
    return {
        title: state.title,

        isValid: state.isValid,

        shouldValidate: state.shouldValidate,
        dispatcher: dispatcher,
    };
}
