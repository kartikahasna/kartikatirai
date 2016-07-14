/// <reference path="../../../../../typings/react/react.d.ts"/>
import React = require("react");

import { TodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";


export class TodoTitleEditorControl extends React.Component<TodoTitleEditorProps, {}> {
    constructor(prop: TodoTitleEditorProps) {
        super(prop);
    }


    render() {
        const that: TodoTitleEditorControl = this;
        const dispatcher = this.props.dispatcher;

        return (
            <div className={this.props.isValid ? "form-group" : "form-group has-error"}>
                <label className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.props.title}
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
                        if (!that.props.isValid) {
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
