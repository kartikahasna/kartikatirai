/// <reference path="../../../../../typings/react/react.d.ts"/>
import React = require("react");

import { TodoEditorProps } from "../../props/forms/todo-editor";
import { TodoTitleEditorControl } from "../form-controls/todo-title-editor";

/*
props にある title を TodoTitleEditorStore のコンストラクタに渡す

TodoTitleEditorStore からは

* 更新された title
* 現在の入力状態の validate 結果

をもらう


*/

export class TodoEditorControl extends React.Component<TodoEditorProps, {}> {
    constructor(prop: TodoEditorProps) {
        super(prop);
    }

    public componentWillMount(): void {
    }


    public componentDidMount(): void {
    }


    public componentWillReceiveProps(nextProps: TodoEditorProps, nextContext: any): void {
    }


    render() {
        const that: TodoEditorControl = this;
        const dispatcher = this.props.dispatcher;

        return (
            <form className="form-horizontal">




                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default"
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    dispatcher.updateTodo();
                                }}>
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
                                    dispatcher.deleteTodo();
                                }}>
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
