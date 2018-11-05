import { connect } from 'react-redux';

import { clickSwitch, moveComponent } from '../actions/index'
import Components from '../components/Components';
import {sanitize} from '../Logic';

const mapStateToProps = (state, ownProps) => {
    return sanitize(state.diagram);
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: e => {
            dispatch(clickSwitch(e));
        },
        onMove: e => {
            dispatch(moveComponent(e));
        },
        selectPort: () => {
            // TODO connect to different port
        }
    };
};

const VisibleComponents = connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);

export default VisibleComponents;