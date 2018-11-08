import * as types from '../constants/ActionTypes';

import data from '../data';
import updateModel from '../Logic';

const components = (state = data, action) => {
    // const newState = Object.assign({}, state);
    const newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    const components = state.components;

    switch (action.type) {
        case '@@INIT':
            updateModel(newState);
            return newState;

        case 'ROOT':
            return "";

        case types.SWITCH:
            for (let i=0; i<components.length; i++) {
                const c = components[i];
                if (c.id === action.id) {
                    components[i] = Object.assign({}, c, {
                        values: [!(c.values[0])]
                    });
                    updateModel(newState);
                    return newState;
                }
            }
            return state;

        case types.MOVE_COMPONENT:
            for (let i=0; i<components.length; i++) {
                const c = components[i];
                if (c.id === action.id) {
                    components[i] = Object.assign({}, c, {
                        x: action.x,
                        y: action.y
                    });
                    updateModel(newState);
                    return newState;
                }
            }
            return state;

        case types.SELECT_COMPONENT:
            components[action.id].selected = !components[action.id].selected;
            return newState;

        default:
            return state;
    }
};

export default components;
