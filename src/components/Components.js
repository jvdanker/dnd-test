import React from 'react';

import VisibleComponent from "../containers/VisibleComponent";
import Component from "../components/Component";

class Components extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return this.props.component.components.map(e =>
            <Component
                key={e.id}
                component={e}
                onMove={this.props.onMove}
                onSelectComponent={this.props.onSelectComponent}
                onClickSwitch={this.props.onClickSwitch}
            />
        );
    }
}

export default Components;