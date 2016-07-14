import { TodoItem } from "../../model";

export interface TodoEditorState {
    title?: string;

    isDeleting?: boolean;
    isUpdating?: boolean;
}


export function createTodoEditorState(todo: TodoItem): TodoEditorState {
    return {
        title: todo.title,

        isDeleting: false,
        isUpdating: false,
    };
}
