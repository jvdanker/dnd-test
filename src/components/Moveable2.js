import React from 'react';

class Moveable2 extends React.Component {

    handleMouseDown = (e) => {
        e.preventDefault();

        this.coords = {
            x: e.pageX,
            y: e.pageY
        };

        document.addEventListener('mousemove', this.handleMouseMove);
    };

    handleMouseMove = (e) => {
        e.preventDefault();

        let px = e.pageX;
        let py = e.pageY;

        const xDiff = this.coords.x - px;
        const yDiff = this.coords.y - py;

        let nx = this.props.x - xDiff;
        let ny = this.props.y - yDiff;

        this.coords.x = px;
        this.coords.y = py;

        const evt = {
            id: this.props.id,
            x: nx,
            y: ny,
        };

        console.log(evt);
        this.props.onMove(evt);
    };

    handleMouseUp = (e) => {
        e.preventDefault();

        // if (! this.dragging) {
        //     this.onClick(this.props.id);
        // }

        document.removeEventListener('mousemove', this.handleMouseMove);
        this.coords = {};
    };

    render() {
        const { x, y } = this.props;
        console.log('render movable', this.props);

        return (
            <g transform={"translate(" + x + "," + y + ")"}
               onMouseDown={this.handleMouseDown}
               onMouseUp={this.handleMouseUp}>
                {this.props.children}
            </g>
        );
    }
};

export default Moveable2;