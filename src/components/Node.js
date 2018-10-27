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
        console.log('mousedown', e);

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
        console.log('mouseup', e);

        document.removeEventListener('mousemove', this.handleMouseMove);
        this.coords = {};
    };

    handleMouseMove = (e) => {
        e.preventDefault();
        // console.log('mousemove', e, this.state.refs);

        const xDiff = this.coords.x - e.pageX;
        const yDiff = this.coords.y - e.pageY;

        this.coords.x = e.pageX;
        this.coords.y = e.pageY;

        var connectors = this.props.connectors;
        connectors.forEach((e, i) => {
            e.x = this.props.x - xDiff + 10 + (i * 30);
            e.y = this.props.y - yDiff + 90;
        });

        const evt = {
            id: this.props.id,
            x: this.props.x - xDiff,
            y: this.props.y - yDiff,
            connectors: connectors
        };

        this.props.onMove(evt);
    };

    render() {
        const { x, y } = this.props;
        return (
            <svg>
                {
                    this.props.onMove ?
                        <Rect
                            x={x}
                            y={y}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}
                        />
                        :
                        <Rect
                            x={x}
                            y={y}
                            onClick={() => this.props.onClick(this.props.id)}
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
                            fill="green" />
                    )
                }
            </svg>
        )
    }
}

export default Node;