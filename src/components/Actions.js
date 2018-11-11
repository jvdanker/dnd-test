import React from 'react';

class Actions extends React.Component {

    render() {
        return (
            <rect
                x="10"
                y="10"
                width="25"
                height="25"
                fill="green"
                onClick={this.props.mergeComponents}
            />
        );
    }
}

export default Actions;