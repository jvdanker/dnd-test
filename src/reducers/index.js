import {combineReducers} from 'redux'
import components from './components'

import data from '../data';

const reducers = combineReducers({
    components,
});


// const reducers = (state = data, action) => {
//     const c = components(state, action);
//     const w = wires(state.wires, action);
    // return c;
//
// };

export default reducers;
