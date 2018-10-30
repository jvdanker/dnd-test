import React from 'react';

import Node from './Node';
import Switch from './Switch';

class Components extends React.Component {

    render() {
        return (
            <g>
                {
                    Object.keys(this.props.library).map(id => {
                        const c = this.props.library[id];
                        switch (c.type) {
                            case 'NODE':
                                return (
                                    <Node
                                        key={id}
                                        id={id}
                                        type={c.type}
                                        x={c.x}
                                        y={c.y}
                                        connectors={c.connectors}
                                        fill='blue'
                                        onClick={this.addComponent} />
                                );
                            case 'SWITCH':
                                return (
                                    <Switch
                                        key={id}
                                        id={id}
                                        type={c.type}
                                        x={c.x}
                                        y={c.y}
                                        connectors={c.connectors}
                                        fill='blue' />
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