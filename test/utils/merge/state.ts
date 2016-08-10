


export interface State {
    state1?: string;
    state2?: string;

    subState?: {
        subState1?: string;
        subState2?: string;

        subSubState?: {
            subSubState1?: string;
            subSubState2?: string;
        },
    };
}


export function createState(): State {
    return {
        state1: "state1",
        state2: "state2",
    };
}


export function createSubState(): State {
    return {
        state1: "state1",
        state2: "state2",
        subState: {
            subState1: "subState1",
            subState2: "subState2",
        },
    };
}


export function createSubSubState(): State {
    return {
        state1: "state1",
        state2: "state2",
        subState: {
            subState1: "subState1",
            subState2: "subState2",
            subSubState: {
                subSubState1: "subSubState1",
                subSubState2: "subSubState2",
            },
        },
    };
}
