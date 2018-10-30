import React from 'react';

import Node from './Node';
import Switch from './Switch';

class Components extends React.Component {

    render() {
        return (
            <g>
                {
                    Object.keys(this.props.components).map(id => {
                        const e = this.props.components[id];
                        switch (e.type) {
                            case 'NODE':
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        x={e.x}
                                        y={e.y}
                                        connectors={e.connectors}
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
                                        connectors={e.connectors}
                                        onMove={this.props.onMove}
                                        selectPort={this.props.selectPort}
                                        switchValue={this.props.switchValue}
                                    />
                                );
                            default:
                                return (
                                    <svg width="1" height="1" x="0" y="0" key={id}></svg>
                                );
                        }
                    })
                }
            </g>
        );
    }
}

export default Components;