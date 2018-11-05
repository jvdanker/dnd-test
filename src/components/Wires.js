import React from 'react';

import {findLib} from '../Logic';

class Wires extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const wires = this.props.wires.map(w => {
            var from = this.props.components[w.from.component];
            var fromV = from.values[w.from.port];
            var fromLib = findLib(this.props.library, from.type);
            var fromC = fromLib.connectors.find(c => c.id === w.from.port);

            var to = this.props.components[w.to.component];
            var toLib = findLib(this.props.library, to.type);
            var toC = toLib.connectors.find(c => c.id === w.to.port);

            return (
                <line
                    key={w.from.component + '-' + w.from.port + ':' + w.to.component + '-' + w.to.port}
                    x1={from.x + fromC.x} y1={from.y + fromC.y}
                    x2={to.x + toC.x} y2={to.y + toC.y}
                    stroke={fromV ? "red" : "black"}
                />
            );
        });

        return wires;
    }
}

export default Wires;