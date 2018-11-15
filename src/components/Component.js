import React from 'react';

import Wires from '../components/Wires';
import Components from '../components/Components';
import VisibleComponents from '../containers/VisibleComponents';
import Node from './Node';
import Switch from '../components/Switch';

class Component extends React.Component {

    render() {
        const component = this.props.component;

        // return <text x={component.x} y={component.y}>{component.type}</text>;

        // TODO render wires
        switch (component.type) {
            case 'ROOT':
                return (
                    <g>
                        <Wires
                            wires={component.wires}
                            components={component.components}
                            ports={component.ports}
                        />
                        <Components
                            component={component}
                            onMove={this.props.onMove}
                            onSelectComponent={this.props.onSelectComponent}
                            onClickSwitch={this.props.onClickSwitch}
                        />
                    </g>
                );

            case 'COMPOSITE':
                return (
                    <g>
                        <Wires
                            wires={component.wires}
                            components={component.components}
                            ports={component.ports}
                            component={component}
                        />
                        <Components
                            component={component}
                            onMove={this.props.onMove}
                            onSelectComponent={this.props.onSelectComponent}
                            onClickSwitch={this.props.onClickSwitch}
                        />
                    </g>
                );

            case 'NODE':
                return (
                    <Node
                        id={component.id}
                        x={component.x}
                        y={component.y}
                        ports={component.ports}
                        values={component.values}
                        onMove={this.props.onMove}
                        onSelectComponent={this.props.onSelectComponent}
                        selectPort={this.props.selectPort}
                        selected={component.selected}
                    />
                );

            case 'SWITCH':
                return (
                    <Switch
                        id={component.id}
                        x={component.x}
                        y={component.y}
                        values={component.values}
                        onMove={this.props.onMove}
                        onClickSwitch={this.props.onClickSwitch}
                        selectPort={this.props.selectPort}
                    />
                );

            default:
                return <g/>
        }


    }
}

export default Component;