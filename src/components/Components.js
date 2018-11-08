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
                    this.props.components.map(e => {
                        switch (e.type) {
                            case 'NODE':
                                return (
                                    <Node
                                        key={e.id}
                                        id={e.id}
                                        x={e.x}
                                        y={e.y}
                                        ports={e.ports}
                                        values={e.values}
                                        onMove={this.props.onMove}
                                        onSelect={this.props.selectComponent}
                                        selectPort={this.props.selectPort}
                                        selected={e.selected}
                                    />
                                );
                            case 'SWITCH':
                                return (
                                    <Switch
                                        key={e.id}
                                        id={e.id}
                                        x={e.x}
                                        y={e.y}
                                        values={e.values}
                                        onMove={this.props.onMove}
                                        onClickSwitch={this.props.onClickSwitch}
                                        selectPort={this.props.selectPort}
                                    />
                                );
                            default:
                                return (
                                    <svg width="1" height="1" x="0" y="0" key={e.id} />
                                );
                        }
                    })
                }
            </g>
        );
    }
}

export default Components;