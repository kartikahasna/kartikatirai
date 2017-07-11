import * as ReactDOM from "react-dom";
import * as React from "react";

import { Action, createAction, bind, Dispatcher, StatePipe, Store } from "../../../src/main";

import { TodoItem } from "./model";
import { TodoEditorStore } from "./stores/forms/todo-editor";
import { TodoEditorProps } from "./props/forms/todo-editor";

import { TodoEditor } from "./components/forms/todo-editor";


console.log("start");

const todo: TodoItem = {
    title: "",
};

bind(document.getElementById("target"), new TodoEditorStore(todo), (next: TodoEditorProps) => {
     return React.createElement(TodoEditor, next);
});
