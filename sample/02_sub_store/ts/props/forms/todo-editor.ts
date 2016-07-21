/// <reference path="../../../../../typings/react/react.d.ts"/>
import React = require("react");

import { Action, createAction, Dispatcher } from "../../../../../src/tarai";

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
