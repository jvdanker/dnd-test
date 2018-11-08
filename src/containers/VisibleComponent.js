import { connect } from 'react-redux';

import * as actions from '../actions/index'
import Component from '../components/Component';

const mapStateToProps = (state, ownProps) => {
    // TODO restrict state to single component?
    return state;
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

const VisibleComponents = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default VisibleComponents;