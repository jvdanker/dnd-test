import { connect } from 'react-redux';

import * as actions from '../actions/index'
import Components from '../components/Components';
import {sanitize} from '../Logic';

const mapStateToProps = (state, ownProps) => {
    return sanitize(state.diagram);
    // return state.diagram;
};

const mapDispatchToProps = (dispatch, ownProps) => {
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
)(Components);

export default VisibleComponents;