import React from 'react';

import Node from './Node';
import Wires from '../components/Wires';
import Switch from '../components/Switch';
import {findLib} from '../Logic';

class Components extends React.Component {

    render() {
        return (
            <g>
                <Wires
                    wires={this.props.wires}
                    components={this.props.components}
                    library={this.props.library} />

                {
                    Object.keys(this.props.components).map(id => {
                        const e = this.props.components[id];
                        var lib = findLib(this.props.library, e.type);

                        switch (e.type) {
                            case 'NODE':
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        x={e.x}
                                        y={e.y}
                                        connectors={lib.connectors}
                                        values={e.values}
                                        onMove={this.props.onMove}
                                        selectPort={this.props.selectPort}/>
                                );
                            case 'SWITCH':
                                return (
                                    <Switch
                                        key={id}
                                        id={id}
                                        x={e.x}
                                        y={e.y}
                                        values={e.values}
                                        onMove={this.props.onMove}
                                        onClick={this.props.onClick}
                                        selectPort={this.props.selectPort}
                                    />
                                );
                            default:
                                return (
                                    <svg width="1" height="1" x="0" y="0" key={id} />
                                );
                        }
                    })
                }
            </g>
        );
    }
}

export default Components;