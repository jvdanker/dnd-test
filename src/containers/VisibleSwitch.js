import { connect } from 'react-redux';

// import { setVisibilityFilter } from '../actions'
import Switch from '../components/Switch';

const mapStateToProps = (state, ownProps) => {
    return {
        // active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onClick: () => {
        //     dispatch(setVisibilityFilter(ownProps.filter))
        // }
    }
};

const VisibleSwitch = connect(
    mapStateToProps,
    mapDispatchToProps
)(Switch);

export default VisibleSwitch;