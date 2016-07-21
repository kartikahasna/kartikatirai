import { TodoEditorDispatcher } from "../../dispatchers/forms/todo-editor";
import { TodoEditorState } from "../../state/forms/todo-editor";

import { TodoTitleEditorConnector } from "../../connectors/form-controls/todo-title-editor";


export interface TodoEditorProps extends TodoEditorState {
    dispatcher?: TodoEditorDispatcher;

    titleConnector?: TodoTitleEditorConnector;
}
