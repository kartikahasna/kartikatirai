import { ActionEvent, Connector, SubStore } from "../../../../../src/tarai";

import { TodoTitleEditorState, createTodoTitleEditorState, updateTodoTitleEditorState } from "../../state/form-controls/todo-title-editor";
import { TodoTitleEditorDispatcher } from "../../dispatchers/form-controls/todo-title-editor";
import { TodoTitleEditorProps } from "../../props/form-controls/todo-title-editor";



/*
親から子への通知

* 初期値の設定 (validation するかどうかも)
* 現在の状態をリクエストする
    * validation するかどうかも


子から親への通知

* 値に変更があった場合
* onChange<string, boolean>


親の側で Connector の Factory を実行する（親側で作成しやすいように作る）

* 子からの callback を、引数に入れる
* Connector の Method を叩いて、こにイベントを送る


子の側で Connector を受け取って

* 親からの callback を流し込む
* Connector の Method を叩いて、イベントを送る


*/

export class TodoTitleEditorConnector implements Connector {
    constructor() {

    }

    public onValidate: ActionEvent<{}>;

    public onChange: ActionEvent<{ value: string, isValid: boolean }>;
}
