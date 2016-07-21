import { TodoItem } from "../../model";
import { TodoTitleEditorState, createTodoTitleEditorState } from "../form-controls/todo-title-editor";


export interface TodoEditorState {
    title?: TodoTitleEditorState;

    isDeleting?: boolean;
    isUpdating?: boolean;
}


export function createTodoEditorState(todo: TodoItem): TodoEditorState {
    return {
        title: createTodoTitleEditorState(todo.title, false),

        isDeleting: false,
        isUpdating: false,
    };
}
