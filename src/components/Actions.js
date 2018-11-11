import React from 'react';

import Wires from '../components/Wires';
import Components from '../components/Components';
import VisibleComponents from '../containers/VisibleComponents';
import Node from './Node';
import Switch from '../components/Switch';
import ActionsComponent from "../containers/ActionsComponent";
import RootComponent from "../containers/RootComponent";

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