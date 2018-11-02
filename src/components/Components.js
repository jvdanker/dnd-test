import React from 'react';

import Node from './Node';
import VisibleSwitch from '../containers/VisibleSwitch';
import {findLib} from '../Logic';

class Components extends React.Component {

    render() {
        return (
            <g>
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
                                    <VisibleSwitch
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
}

export default Components;