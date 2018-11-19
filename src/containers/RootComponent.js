import { connect } from 'react-redux';

import * as actions from '../actions/index'
import Component from '../components/Component';

const mapStateToProps = (state, ownProps) => {
    return {
        component: state.diagram.components[0]
    };
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
        onSelectComponent: e => {
            dispatch(actions.selectComponent(e));
        }
    };
};

const RootComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default RootComponent;