/// <reference path="../../../typings/qunit/qunit.d.ts"/>

import { merge } from "../../../src/tarai";
import { State } from "../../../test/utils/merge/state";


interface StatePack {
    states?: State[];
    currentState?: State;
}

export default () => {
    QUnit.test("utils/merge ref state", (assert: QUnitAssert) => {
        const state1: State = {
            state1: "state1-1",
            state2: "state1-2",
        };

        const state2: State = {
            state1: "state2-1",
            state2: "state2-2",
        };

        const state3: State = {
            state1: "state3-1",
            state2: "state3-2",
        };

        const state: StatePack = {
            states: [state1, state2],
            currentState: state1,
        };

        const result = merge<StatePack>(state, {
            currentState: state3,
        });

        assert.equal("state3-1", result.currentState.state1);
        assert.equal("state3-2", result.currentState.state2);

        assert.equal("state1-1", result.states[0].state1);
        assert.equal("state1-2", result.states[0].state2);

        assert.equal("state2-1", result.states[1].state1);
        assert.equal("state2-2", result.states[1].state2);
    });


    QUnit.test("utils/merge ref state2", (assert: QUnitAssert) => {
        const state1: State = {
            state1: "state1-1",
            state2: "state1-2",
        };

        const state2: State = {
            state1: "state2-1",
            state2: "state2-2",
        };

        const state3: State = {
            state1: "state3-1",
            state2: "state3-2",
        };

        const state: StatePack = {
            states: [state1, state2],
            currentState: state1,
        };

        const result = merge<StatePack>(state, {
            currentState: state2,
        });

        assert.equal("state2-1", result.currentState.state1);
        assert.equal("state2-2", result.currentState.state2);

        assert.equal("state1-1", result.states[0].state1);
        assert.equal("state1-2", result.states[0].state2);

        assert.equal("state2-1", result.states[1].state1);
        assert.equal("state2-2", result.states[1].state2);
    });
};
