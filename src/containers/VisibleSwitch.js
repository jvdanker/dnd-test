import { connect } from 'react-redux';

import { clickSwitch } from '../actions'
import Switch from '../components/Switch';

const mapStateToProps = (state, ownProps) => {
    return {
        // active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(dispatch, ownProps);
    return {
        onClick: () => {
            dispatch(clickSwitch(ownProps));
        }
        // onClick: () => {
        //     dispatch(setVisibilityFilter(ownProps.filter))
        // }
    };
};

const VisibleSwitch = connect(
    mapStateToProps,
    mapDispatchToProps
)(Switch);

export default VisibleSwitch;