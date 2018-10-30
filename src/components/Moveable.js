import React from 'react';

function Moveable(WrappedComponent) {

    return class extends React.Component {
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

            var px = e.pageX;
            var py = e.pageY;

            const xDiff = this.coords.x - px;
            const yDiff = this.coords.y - py;

            var nx = this.props.x - xDiff;
            var ny = this.props.y - yDiff;

            this.coords.x = px;
            this.coords.y = py;

            const evt = {
                id: this.props.id,
                x: nx,
                y: ny,
            };

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

            return (
                <g transform={"translate(" + x + "," + y + ")"}
                   onMouseDown={this.handleMouseDown}
                   onMouseUp={this.handleMouseUp}>
                    <WrappedComponent {...this.props} />
                </g>
            );
        }
    };
}

export default Moveable;