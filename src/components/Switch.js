import React, {Component} from 'react';

import Moveable from './Moveable';

class Switch extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

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
                    // onClick={() => this.props.switchValue(this.props.id)}
                    onClick={() => this.props.onClick(this.props.id)}
                />
            </g>
        )
    }
}

export default Moveable(Switch);