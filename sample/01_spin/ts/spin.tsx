/// <reference path="../../../typings/react/react.d.ts" />
import React = require("react");

import { SpinDispatcher, SpinProps } from "./sample";


export class Spin extends React.Component<SpinProps, {}> {
    constructor(prop: SpinProps) {
        super(prop);
    }


    render() {
        const that: Spin = this;

        return (
            <div>
                {(() => {
                    if (that.props.isSpin) {
                        return (<i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>);
                    } else {
                        return (<i className="fa fa-refresh fa-3x fa-fw"></i>);
                    }
                })()}

                <button onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    that.props.dispatcher.stopSpin({});
                }}>Stop</button>

                <button onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    that.props.dispatcher.startSpin({});
                }}>Start</button>
            </div>
        );
    }
}
