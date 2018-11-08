import React from 'react';

// import VisibleComponents from '../containers/VisibleComponents';
// import Wires from '../components/Wires';
import Node from './Node';
import Switch from '../components/Switch';

class Component extends React.Component {

    render() {
        const component = this.props.component;

        // TODO render wires
        switch (component.type) {
            case 'ROOT':
                return <g></g>;
                // return <VisibleComponents />;

            case 'NODE':
                return (
                    <Node
                        id={component.id}
                        x={component.x}
                        y={component.y}
                        ports={component.ports}
                        values={component.values}
                        onMove={this.props.onMove}
                        onSelect={this.props.selectComponent}
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
                return (
                    <svg width="1" height="1" x="0" y="0" key={component.id} />
                );

        }
                {/*<Wires*/}
                    {/*wires={this.props.wires}*/}
                    {/*components={this.props.components}*/}
                    {/*library={this.props.library} />*/}
    }
}

export default Component;