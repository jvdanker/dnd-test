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
                    fill="blue"
                />
                {
                    this.props.connectors.map(e =>
                        <rect
                            key={e.id}
                            x={e.x}
                            y={e.y}
                            width="20"
                            height="20"
                            fill={e.selected ? "yellow" : e.value ? "red" : "green"}
                            onClick={() => this.props.selectPort(this.props.id, e)}
                        />
                    )
                }
            </g>
        )
    }
}

export default Moveable(Node);