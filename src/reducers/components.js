import * as types from '../constants/ActionTypes';

import data from '../data';

const components = (state = data.components, action) => {
    const components = Object.assign({}, state);

    switch (action.type) {
        case types.SWITCH:
            return state;

        case types.MOVE_COMPONENT:
            components[action.id] = {
                type: components[action.id].type,
                x: action.x,
                y: action.y
            };
            return Object.assign({}, components);

        default:
            return state
    }
};

export default components
