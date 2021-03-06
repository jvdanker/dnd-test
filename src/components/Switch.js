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
                    fill={this.props.values && this.props.values[0] ? "red" : "green"}
                    onClick={() => this.props.selectPort(this.props.id, this.props.values[0])}
                />
                <rect
                    x="0"
                    y="30"
                    width="20"
                    height="20"
                    fill={this.props.value ? "red" : "blue"}
                    onClick={() => this.props.onClickSwitch(this.props.id)}
                />
            </g>
        )
    }
}

export default Moveable(Switch);