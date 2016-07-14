import { TodoItem } from "../model";


export interface TodoItemEditorTitleState {
    title?: string;

    isValid?: boolean;
}

export function createTodoItemEditorTitleState(title: string): TodoItemEditorTitleState {
    return {
        title: title,

        isValid: !!title,
    };
}


export interface TodoItemEditorBodyState {
    body?: string;

    isValid?: boolean;
}

export function createTodoItemEditorBodyState(body: string): TodoItemEditorBodyState {
    return {
        body: body,

        isValid: !!body,
    };
}


export interface TodoItemEditorState {
    title?: TodoItemEditorTitleState;

    body?: TodoItemEditorBodyState;
}

export function createTodoItemState(item: TodoItem): TodoItemEditorState {
    return {
        title: createTodoItemEditorTitleState(item.title),
        body: createTodoItemEditorBodyState(item.body),
    };
}
