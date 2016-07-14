import { TodoTitleEditorDispatcher } from "../../dispatchers/form-controls/todo-title-editor";
import { TodoTitleEditorState } from "../../state/form-controls/todo-title-editor";


export interface TodoTitleEditorProps extends TodoTitleEditorState {
    dispatcher?: TodoTitleEditorDispatcher;
}
