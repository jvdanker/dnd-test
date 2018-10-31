import React from 'react';

class Wires extends React.Component {
    render() {
        const wires = this.props.wires.map(w => {
            var from = this.props.components[w.from.component];
            var fromV = from.values[w.from.port];
            var fromLib = this.component(from.type);
            var fromC = fromLib.connectors.find(c => c.id === w.from.port);

            var to = this.props.components[w.to.component];
            var toLib = this.component(to.type);
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

    component(type) {
        var key = Object.keys(this.props.library).find(e => {
            var component = this.props.library[e];
            if (component.type === type) {
                return component;
            }

            return null;
        });

        return this.props.library[key];
    }
}

export default Wires;