import { TodoEditorDispatcher } from "../../dispatchers/forms/todo-editor";
import { TodoEditorState } from "../../state/forms/todo-editor";


export interface TodoEditorProps extends TodoEditorState {
    dispatcher?: TodoEditorDispatcher;
}
