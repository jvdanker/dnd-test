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
                        console.log(e);

                        var lib = this.component(e.type);
                        console.log(lib);

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

export default Components;