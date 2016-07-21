

export interface TodoTitleEditorState {
    title?: string;
    isValid?: boolean;

    shouldValidate?: boolean;
}

export function createTodoTitleEditorState(title: string, shouldValidate: boolean): TodoTitleEditorState {
    return {
        title: title,

        isValid: shouldValidate ? (!!title) : true,

        shouldValidate: shouldValidate,
    };
}
