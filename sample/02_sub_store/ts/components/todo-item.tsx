/// <reference path="../../../../typings/react/react.d.ts"/>
import React = require("react");

import { TodoItemEditorDispatcher } from "../dispatchers/todo-item";
import { TodoItemEditorProps } from "../props/todo-item";


export class TodoItemEditor extends React.Component<TodoItemEditorProps, {}> {
    constructor(prop: TodoItemEditorProps) {
        super(prop);
    }


    render() {
        const that: TodoItemEditor = this;

        return (
            <form className="form-horizontal">
                <div className={this.props.title.isValid ? "form-group" : "form-group has-error"}>
                    <label className="col-sm-2 control-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.props.title.title}
                               onChange={(e: React.FormEvent) => {
                                   that.props.dispatcher.updateTitle((e.target as HTMLInputElement).value);
                               }}
                               onFocus={(e: React.FocusEvent) => {
                               }}
                               onBlur={(e: React.FormEvent) => {

                               }}/>
                        {(() => {
                            if (!that.props.title.isValid) {
                                return (
                                    <span className="help-block">
                                        ユーザー名の形式が不正です。
                                    </span>
                                );
                            }
                        })()}
                    </div>
                </div>

                <div className={this.props.body.isValid ? "form-group" : "form-group has-error"}>
                    <label className="col-sm-2 control-label">Body</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.props.body.body}
                               onChange={(e: React.FormEvent) => {
                                   that.props.dispatcher.updateBody((e.target as HTMLInputElement).value);
                               }}
                               onFocus={(e: React.FocusEvent) => {
                               }}
                               onBlur={(e: React.FormEvent) => {

                               }}/>
                        {(() => {
                            if (!that.props.body.isValid) {
                                return (
                                    <span className="help-block">
                                        ユーザー名の形式が不正です。
                                    </span>
                                );
                            }
                        })()}
                    </div>
                </div>
            </form>
        );
    }
}
