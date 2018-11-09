import { connect } from 'react-redux';

import * as actions from '../actions/index'
import Component from '../components/Component';
import {sanitize} from "../Logic";

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);

    if (Object.keys(ownProps).length === 0) {
        return {component: state.diagram.components[0]};
    }

    // TODO restrict state to single component?
    return sanitize(state);
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // TODO remove actions from VisibleComponents?
    return {
        onClickSwitch: e => {
            dispatch(actions.clickSwitch(e));
        },
        onMove: e => {
            dispatch(actions.moveComponent(e));
        },
        selectPort: () => {
            // TODO connect to different port
        },
        selectComponent: e => {
            dispatch(actions.selectComponent(e));
        }
    };
};

const VisibleComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default VisibleComponent;