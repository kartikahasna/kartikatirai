import { TodoItemEditorState } from "../state/todo-item";

import { TodoItemEditorDispatcher } from "../dispatchers/todo-item";

export interface TodoItemEditorProps extends TodoItemEditorState {
    dispatcher?: TodoItemEditorDispatcher;
}
