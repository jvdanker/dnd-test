import { connect } from 'react-redux';

import { clickSwitch, moveComponent } from '../actions'
import Switch from '../components/Switch';

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    return state.components[id];
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(dispatch, ownProps);
    return {
        onClick: () => {
            dispatch(clickSwitch(ownProps));
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