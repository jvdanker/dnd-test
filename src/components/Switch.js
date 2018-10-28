import React, {Component} from 'react';

class Switch extends Component {

    constructor(props) {
        super(props);
        this.dragging = false;

        this.switchValue = this.switchValue.bind(this);
    }

    handleMouseDown = (e) => {
        if (! (this.props.onMove)) {
            return;
        }

        e.preventDefault();
        // console.log('mousedown', e);

        this.coords = {
            x: e.pageX,
            y: e.pageY
        };

        this.dragging = false;
        document.addEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseUp = (e) => {
        if (! (this.props.onMove)) {
            return;
        }

        e.preventDefault();
        // console.log('mouseup', e);

        if (! this.dragging) {
            this.switchValue(this.props.id);
        }

        document.removeEventListener('mousemove', this.handleMouseMove);
        this.dragging = false;
        this.coords = {};
    };

    handleMouseMove = (e) => {
        e.preventDefault();
        // console.log('mousemove', e, this.state.refs);

        var px = e.pageX;
        var py = e.pageY;

        if (px  < 200) {
            px = 200;
        }
        if (py < 0) {
            py = 0;
        }

        const xDiff = this.coords.x - px;
        const yDiff = this.coords.y - py;

        var nx = this.props.x - xDiff;
        var ny = this.props.y - yDiff;

        this.coords.x = px;
        this.coords.y = py;

        var connectors = this.props.connectors;
        connectors.forEach((e, i) => {
            e.x = nx + (i * 30);
            e.y = ny - 30;
        });

        const evt = {
            type: this.props.type,
            id: this.props.id,
            x: nx,
            y: ny,
            connectors: connectors
        };

        this.dragging = true;
        this.props.onMove(evt);
    };

    switchValue(id) {
        if (this.dragging) {
            return;
        }

        this.props.switchValue(id);
    }

    render() {
        const { x, y } = this.props;
        return (
            <svg>
                <rect
                    x={x}
                    y={y - 30}
                    width="20"
                    height="20"
                    fill={this.props.connectors[0].value ? "red" : "green"}
                    onClick={() => this.props.selectPort(this.props.id, this.props.connectors[0])}
                />
                <rect
                    x={x}
                    y={y}
                    width="20"
                    height="20"
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    fill={this.props.value ? "red" : "blue"}
                />
            </svg>
        )
    }
}

export default Switch;