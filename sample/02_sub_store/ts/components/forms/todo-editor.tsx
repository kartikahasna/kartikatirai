/// <reference path="../../../../../typings/react/react.d.ts"/>
import React = require("react");

import { Action, createAction, Dispatcher } from "../../../../../src/tarai";

import { TodoEditorProps } from "../../props/forms/todo-editor";
import { TodoTitleEditor } from "../form-controls/todo-title-editor";


export class TodoEditor extends React.Component<TodoEditorProps, {}> {
    constructor(prop: TodoEditorProps) {
        super(prop);
    }


    render() {
        const that: TodoEditor = this;
        const dispatcher = this.props.dispatcher;
        const isValid = this.props.title.isValid;

        return (
            <form className="form-horizontal">

                <TodoTitleEditor {...this.props.title}/>


                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    dispatcher.updateTodo({});
                                }}
                                disabled={!isValid}>
                            {(() => {
                                if (that.props.isUpdating) {
                                    return (
                                        <span>
                                            <i className="fa fa-spinner fa-spin"/>
                                            <b className="white-space"/>
                                        </span>
                                    );
                                }
                            })()}
                            更新
                        </button>

                        <b className="white-space"/>

                        <button className="btn btn-danger"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    dispatcher.deleteTodo({});
                                }}
                                disabled={!isValid}>
                            {(() => {
                                if (that.props.isDeleting) {
                                    return (
                                        <span>
                                            <i className="fa fa-spinner fa-spin"/>
                                            <b className="white-space"/>
                                        </span>
                                    );
                                }
                            })()}
                            削除
                        </button>
                    </div>
                </div>

            </form>
        );
    }
}
