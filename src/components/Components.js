import React from 'react';

import VisibleComponent from "../containers/VisibleComponent";

class Components extends React.Component {

    render() {
        return this.props.components.map(e =>
            <VisibleComponent key={e.id} component={e} />
        );
    }
}

export default Components;