import React from 'react';

// import {findLib} from '../Logic';

class Wires extends React.Component {

    render() {
        const wires = this.props.wires.map(w => {
            let from = this.props.component;
            if (typeof w.from.component !== 'undefined') {
                from = this.props.components.find(c => c.id === w.from.component);
            }
            let fromV = from.values[w.from.port];
            let fromC = from.ports.find(p => p.id === w.from.port);

            let to = this.props.component;
            if (typeof w.to.component !== 'undefined') {
                to = this.props.components.find(c => c.id === w.to.component);
            }
            let toC = to.ports.find(p => p.id === w.to.port);

            return (
                <g>
                    <line
                        key={w.from.component + '-' + w.from.port + ':' + w.to.component + '-' + w.to.port}
                        x1={from.x + fromC.x} y1={from.y + fromC.y}
                        x2={to.x + toC.x} y2={to.y + toC.y}
                        stroke={fromV ? "red" : "black"}
                    />
                    <text x={from.x + fromC.x + 10} y={from.y + fromC.y}>
                        {w.from.component + '-' + w.from.port + ':' + w.to.component + '-' + w.to.port}
                    </text>

                </g>
            );
        });

        return wires;
    }
}

export default Wires;