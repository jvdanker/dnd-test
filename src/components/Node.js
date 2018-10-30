import React, {Component} from 'react';
import styled from 'styled-components';

const Rect = styled.rect`
    fill: blue;
    height: 100px;
    width: 100px;
`;

class Node extends Component {

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

        document.addEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseUp = (e) => {
        if (! (this.props.onMove)) {
            return;
        }

        e.preventDefault();
        // console.log('mouseup', e);

        document.removeEventListener('mousemove', this.handleMouseMove);
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
            // e.x = nx + 10 + (i * 30);
            // e.y = ny + 90;
        });

        const evt = {
            type: this.props.type,
            id: this.props.id,
            x: nx,
            y: ny,
            connectors: connectors
        };

        this.props.onMove(evt);
    };

    render() {
        const { x, y } = this.props;
        return (
            <g
                viewBox="0 0 100 100"
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                transform={"translate(" + x + "," + y + ")"}>>
                {
                    <rect
                        x="0"
                        y="10"
                        width="90"
                        height="90"
                        fill="blue"
                        onClick={() => {
                            if (!this.props.onMove) {
                                this.props.onClick(this.props.id)
                            }
                        }}
                    />
                }
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

export default Node;