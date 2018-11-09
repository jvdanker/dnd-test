import React from 'react';

import VisibleComponent from "../containers/VisibleComponent";

class Components extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return this.props.component.components.map(e =>
            <VisibleComponent key={e.id} component={e} />
        );
    }
}

export default Components;