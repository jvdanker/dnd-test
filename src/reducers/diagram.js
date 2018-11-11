import * as types from '../constants/ActionTypes';

import data from '../data';
import updateModel from '../Logic';
import { mergeComponents } from '../Logic';

const components = (state = data, action) => {
    // const newState = Object.assign({}, state);
    const newState = JSON.parse(JSON.stringify(state));
    const components = newState.components;

    switch (action.type) {
        case '@@INIT': {
            updateModel(newState);
            return newState;
        }

        case types.SWITCH: {
            var c = findComponent(components[0], action.id);
            if (c !== -1) {
                c.values[0] = !c.values[0];
                updateModel(newState);
                return newState;
            }
            return state;
        }

        case types.MOVE_COMPONENT: {
            var c = findComponent(components[0], action.id);
            if (c !== -1) {
                c.x = action.x;
                c.y = action.y;
                return newState;
            }
            return state;
        }

        case types.SELECT_COMPONENT: {
            var c = findComponent(components[0], action.id);
            if (c !== -1) {
                c.selected = !c.selected;

                if (c.selected) {
                    newState.selectedComponents.push(c);
                } else {
                    newState.selectedComponents = newState.selectedComponents.filter(component => {
                        return component.id !== c.id;
                    });
                }
                return newState;
            }
            return state;
        }

        case types.MERGE_SELECTED_COMPONENTS: {
            mergeComponents(newState, state.selectedComponents);
            return state;
        }

        default:
            return state;
    }
};

function findComponent(root, id) {
    if (root.id === id) {
        return root;
    }

    if (typeof root.components === 'undefined') {
        return -1;
    }

    for (let i=0; i<root.components.length; i++) {
        const c = findComponent(root.components[i], id);
        if (c !== -1) {
            return c;
        }
    }

    return -1;
}

export default components;
