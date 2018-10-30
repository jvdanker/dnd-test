import React from 'react';

class Wires extends React.Component {
    render() {
        const wires = this.props.wires.map(w => {
            var from = this.props.components[w.from.component];
            var fromC = from.connectors.find(c => c.id === w.from.port);
            var to = this.props.components[w.to.component];
            var toC = to.connectors.find(c => c.id === w.to.port);

            return (
                <line
                    key={w.from.component + '-' + w.from.port + ':' + w.to.component + '-' + w.to.port}
                    x1={from.x + fromC.x} y1={from.y + fromC.y}
                    x2={to.x + toC.x} y2={to.y + toC.y}
                    stroke={w.value ? "red" : "black"}
                />
            );
        });

        return wires;
    }
}

export default Wires;