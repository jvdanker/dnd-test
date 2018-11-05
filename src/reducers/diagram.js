import * as types from '../constants/ActionTypes';

import data from '../data';

const components = (state = data, action) => {
    const newState = Object.assign({}, state);
    const components = state.components;
    const component = components[action.id];

    console.log(state, newState);

    switch (action.type) {
        case types.SWITCH:
            components[action.id] = Object.assign({}, component, {
                values: [!(component.values[0])]
            });
            return newState;

        case types.MOVE_COMPONENT:
            components[action.id] = Object.assign({}, component, {
                x: action.x,
                y: action.y
            });
            return newState;

        default:
            return state;
    }
};

export default components;
