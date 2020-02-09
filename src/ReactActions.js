/**
 * Why is it different from ReduxActions?
 * Because ReduxActions.js contains the actual functions that implement the actions.
 * This file, however, contains the action templates that must be called for each action.
 */

function genericTemplate (actionName, props) {
    return {
        type: actionName,
        data: { ...props }
    };
}

export function ADD_SITH (props) {
    return genericTemplate('ADD_SITH', props);
}

export function REMOVE_SITH (props) {
    return genericTemplate('REMOVE_SITH', props);
}

export function UPDATE_SITH (props) {
    return genericTemplate('UPDATE_SITH', props);
}

export function UPDATE_SKILL_FILTER (newCutoff) {
    return {
        type: 'UPDATE_SKILL_FILTER',
        cutoff: newCutoff
    };
}
