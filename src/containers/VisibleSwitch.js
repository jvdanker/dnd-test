import { connect } from 'react-redux';

import { clickSwitch, moveComponent } from '../actions/index'
import Switch from '../components/Switch';

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    return state.components[id];
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

const VisibleSwitch = connect(
    mapStateToProps,
    mapDispatchToProps
)(Switch);

export default VisibleSwitch;