import { connect } from 'react-redux';

import * as actions from '../actions/index'
import Actions from '../components/Actions';

const mapStateToProps = (state, ownProps) => {
    return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        mergeComponents: () => {
            dispatch(actions.mergeSelectedComponents());
        }
    };
};

const RootComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Actions);

export default RootComponent;