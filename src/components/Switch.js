import React, {Component} from 'react';

import Moveable from './Moveable';

class Switch extends Component {

    render() {
        return (
            <g>
                <rect
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    fill={this.props.connectors[0].value ? "red" : "green"}
                    onClick={() => this.props.selectPort(this.props.id, this.props.connectors[0])}
                />
                <rect
                    x="0"
                    y="30"
                    width="20"
                    height="20"
                    fill={this.props.value ? "red" : "blue"}
                />
            </g>
        )
    }
}

export default Moveable(Switch);