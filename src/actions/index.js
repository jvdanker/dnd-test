import * as types from '../constants/ActionTypes';

export const clickSwitch = id => ({
    type: types.SWITCH,
    id: id
});

export const moveComponent = e => ({
    type: types.MOVE_COMPONENT,
    id: e.id,
    x: e.x,
    y: e.y
});

export const selectComponent = id => ({
    type: types.SELECT_COMPONENT,
    id: id
});

