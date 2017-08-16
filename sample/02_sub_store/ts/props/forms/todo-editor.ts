import * as React from "react";

import { Action, createAction, Dispatcher } from "../../../../../src/main";

import { TodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";


export class TodoEditorDispatcher extends Dispatcher {
    constructor() {
        super();

        this.deleteTodo = createAction<{}>();
        this.updateTodo = createAction<{}>();
    }

    public deleteTodo: Action<{}>;
    public updateTodo: Action<{}>;
}


export interface TodoEditorProps {
    dispatcher?: TodoEditorDispatcher;

    title: TodoTitleEditorProps;

    isDeleting: boolean;
    isUpdating: boolean;
}
