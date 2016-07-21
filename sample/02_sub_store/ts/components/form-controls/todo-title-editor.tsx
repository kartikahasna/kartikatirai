/// <reference path="../../../../../typings/react/react.d.ts"/>
import React = require("react");

import { TodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";
import { TodoTitleEditorConnector } from "../../connectors/form-controls/todo-title-editor";
import { SubComponent, SubComponentProps } from "../../../../../src/tarai";

import { TodoTitleEditorState, createTodoTitleEditorState, updateTodoTitleEditorState } from "../../state/form-controls/todo-title-editor";
import { TodoTitleEditorDispatcher } from "../../dispatchers/form-controls/todo-title-editor";
import { TodoTitleEditorStore } from "../../stores/form-controls/todo-title-editor";


export class TodoTitleEditorControl extends SubComponent<TodoTitleEditorConnector, TodoTitleEditorState, TodoTitleEditorProps, TodoTitleEditorStore> {
    constructor(prop: SubComponentProps<TodoTitleEditorConnector>) {
        const store: TodoTitleEditorStore = new TodoTitleEditorStore();
        super(prop, store);
    }


    render() {
        const that: TodoTitleEditorControl = this;
        const dispatcher = this.state.dispatcher;

        return (
            <div className={this.state.isValid ? "form-group" : "form-group has-error"}>
                <label className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.title}
                           onChange={(e: React.FormEvent) => {
                               dispatcher.updateTitle((e.target as HTMLInputElement).value);
                           }}
                           onFocus={(e: React.FocusEvent) => {
                               dispatcher.focus();
                           }}
                           onBlur={(e: React.FormEvent) => {
                               dispatcher.blur();
                           }}/>
                    {(() => {
                        if (!that.state.isValid) {
                            return (
                                <span className="help-block">
                                    ユーザー名の形式が不正です。
                                </span>
                            );
                        }
                    })()}
                </div>
            </div>
        );
    }
}
