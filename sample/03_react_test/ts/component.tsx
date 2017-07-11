import * as React from "react";


export interface StateComponentProps {

}

export interface StateComponentState {
    state1?: string;
    state2?: string;

    subState?: { subState1?: string, subState2?: string; };
}


export class StateComponent extends React.Component<StateComponentProps, StateComponentState> {
    constructor(prop: StateComponentProps) {
        super(prop);

        this.state = {
            state1: "state1",
            state2: "state2",

            subState: {
                subState1: "subState1",
                subState2: "subState2",
            },
        };
    }


    render() {
        const that: StateComponent = this;

        return (
            <div>
                <h2>State</h2>
                <dl className="dl-horizontal">
                    <dt>state1</dt><dd>{this.state.state1}</dd>
                    <dt>state2</dt><dd>{this.state.state2}</dd>

                    <dt>subState1</dt><dd>{this.state.subState.subState1}</dd>
                    <dt>subState2</dt><dd>{this.state.subState.subState2}</dd>

                </dl>

                <button onClick={(e) => {
                    e.preventDefault();

                    that.setState({
                        subState: {
                            subState1: "change",
                        }
                    });
                }}>Update</button>
            </div>
        );
    }
}
