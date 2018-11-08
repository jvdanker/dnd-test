import React from 'react';

import Node from './Node';
import Wires from '../components/Wires';
import Switch from '../components/Switch';
import {findLib} from '../Logic';
import VisibleComponent from "../containers/VisibleComponent";

class Components extends React.Component {

    render() {
        return this.props.components.map(e =>
            <VisibleComponent key={e.id} component={e} />
        );
    }
}

export default Components;