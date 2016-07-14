import { Store } from "../../../../src/tarai";

import { TodoItem } from "../model";

import { TodoItemEditorDispatcher } from "../dispatchers/todo-item";
import { TodoItemEditorProps } from "../props/todo-item";
import { TodoItemEditorState, createTodoItemState, createTodoItemEditorTitleState, createTodoItemEditorBodyState } from "../state/todo-item";


export class TodoItemEditorStore extends Store<TodoItemEditorState, TodoItemEditorProps> {
    private _dispatcher: TodoItemEditorDispatcher;

    constructor(item: TodoItem) {
        const state: TodoItemEditorState = createTodoItemState(item);
        super(state);

        this._dispatcher = new TodoItemEditorDispatcher();
        this._dispatcher.onUpdateTitle.bind(this, this.onUpdateTitle);
        this._dispatcher.onUpdateBody.bind(this, this.onUpdateBody);
    }

    public toProps(state: TodoItemEditorState): TodoItemEditorProps {
        return {
            title: state.title,
            body: state.body,
            dispatcher: this._dispatcher,
        }
    }


    public onUpdateTitle(next: string) {
        const pipe = this.getStatePipe();

        pipe.setState({
            title: createTodoItemEditorTitleState(next),
        });
    }

    public onUpdateBody(next: string) {
        const pipe = this.getStatePipe();

        pipe.setState({
            body: createTodoItemEditorBodyState(next),
        });
    }
}
