


export interface TodoTitleEditorState {
    title?: string;

    isValid?: boolean;

    hasFocused?: boolean;
}


export function createTodoTitleEditorState(title: string): TodoTitleEditorState {
    return {
        title: title,
        isValid: !!title,

        hasFocused: false,
    };
}


export function updateTodoTitleEditorState(prev: TodoTitleEditorState, title: string): TodoTitleEditorState {
    return {
        title: title,
        isValid: !!title,

        hasFocused: prev.hasFocused,
    };
}
