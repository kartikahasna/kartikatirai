export interface Action {
    type?: string;
}


export class ActionProvider<A extends Action> {
    public type: string;


    constructor(type: string) {
        this.type = type;
    }
}

/*
export class ActionPari<A extends Action> {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }


    create(): A {
        return null;
    }

    match(source: Action, method:(action: A) => void): void {
    }
}


const testAction = new ActionPari<Action>("");
*/
