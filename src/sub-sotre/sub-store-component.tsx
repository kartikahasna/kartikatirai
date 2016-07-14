/// <reference path="../../typings/react/react.d.ts"/>
import React = require("react");


export interface SubSoreComponentState<S> {
    subStore: S;
}


export class SubSoreComponent<P, S> extends React.Component<P, SubSoreComponentState<S>> {
    constructor(prop: P) {
        super(prop);
    }


    public componentWillMount(): void {
    }


    public componentDidMount(): void {
    }


    public componentWillReceiveProps(nextProps: P, nextContext: any): void {
    }
}
