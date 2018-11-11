import React from 'react';

// import {findLib} from '../Logic';

class Wires extends React.Component {

    render() {
        const wires = this.props.wires.map(w => {
            var p = this.props;
            var from = this.props.components.find(c => c.id === w.from.component);
            var fromV = from.values[w.from.port];
            // var fromC = this.props.ports.find(p => p.id === w.from.port);
            var fromC = from.ports.find(p => p.id === w.from.port);

            // var fromLib = findLib(this.props.library, from.type);
            // var fromC = fromLib.connectors.find(c => c.id === w.from.port);

            var to = this.props.components.find(c => c.id === w.to.component);
            var toC = to.ports.find(p => p.id === w.to.port);
            // var toLib = findLib(this.props.library, to.type);
            // var toC = toLib.connectors.find(c => c.id === w.to.port);

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