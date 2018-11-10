import React, {Component} from 'react';

import Moveable from './Moveable';

class Node extends Component {

    render() {
        return (
            <g >
                <rect
                    x="0"
                    y="10"
                    width="90"
                    height="90"
                    fill={this.props.selected ? "yellow" : "blue"}
                    onClick={() => this.props.onSelectComponent(this.props.id)}
                />
                {
                    this.props.ports.map(e =>
                        <rect
                            key={e.id}
                            x={e.x}
                            y={e.y}
                            width="20"
                            height="20"
                            fill={e.selected ? "yellow" : this.props.values && this.props.values[e.id] ? "red" : "green"}
                            onClick={() => this.props.selectPort(this.props.id, e)}
                        />
                    )
                }
            </g>
        )
    }
}

export default Moveable(Node);