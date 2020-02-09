import { createStore } from 'redux';

let dataStore = null;
let initialState = {};
let actions = {};

export function rootReducer(state, action) {
    if (state===undefined) {
        state = initialState;
    }
    if (!action.type) {
        action.type = 'DEFAULT';
    }
    if (!actions[action.type] && actions._CATCH_ALL) {
        return actions._CATCH_ALL(state, action);
    }
    else if (actions[action.type]) {
        return actions[action.type](state, action);
    }
    else {
        console.log('unknown action', state, action, actions);
        return { ...state };
    }
}

export function createDataStore(init = {}, acts = {}) {
    if (typeof acts !== 'object') acts = {};
    initialState = { ...init };
    actions = acts;
    dataStore = createStore(rootReducer);
    return dataStore;
}
