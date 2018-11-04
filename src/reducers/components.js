import * as types from '../constants/ActionTypes';

import data from '../data';

const components = (state = data.components, action) => {
    const components = Object.assign({}, state);

    switch (action.type) {
        case types.SWITCH:
            components[action.id] = Object.assign({}, components[action.id], {
                values: [!(components[action.id].values[0])]
            });
            return Object.assign({}, components);

        case types.MOVE_COMPONENT:
            components[action.id] = Object.assign({}, components[action.id], {
                x: action.x,
                y: action.y
            });
            return Object.assign({}, components);

        default:
            return state
    }
};

export default components
