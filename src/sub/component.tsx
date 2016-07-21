/// <reference path="../../typings/react/react.d.ts"/>
import React = require("react");

import { Callback } from "../callback";
import { StatePipe } from "../store";

import { Connector, SubComponentProps } from "./interface";
import { SubStore } from "./store";


export class SubComponent<C extends Connector, IS, VS, SS extends SubStore<C, IS, VS>> extends React.Component<SubComponentProps<C>, VS> {
    private _subStore: SS;
    private _onUpdateUnbinder: () => void;

    constructor(prop: SubComponentProps<C>, subStore: SS) {
        super(prop);

        this._subStore = subStore;
        this.state = subStore.getViewState();
    }


    public componentWillMount(): void {
    }


    public componentDidMount(): void {
        const that = this;

        this._onUpdateUnbinder = this._subStore.onUpdate((state: VS) => {
            that.setState(state);
        });
    }


    public componentWillReceiveProps(nextProps: SubComponentProps<C>, nextContext: any): void {
        // 古い Props のアンバインド？
        this._subStore.injectConnector(nextProps.connector);
    }


    componentWillUnmount(): void {
        this._onUpdateUnbinder();
    }
}
