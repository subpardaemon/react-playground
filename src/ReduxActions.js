/**
 * Word to the wise: we're not using Array.push, or direct manipulation of the state argument.
 * That is because Redux wants to be capable of time travel, ie. go back to a previous store state.
 * For this, store state in any given moment must be treated as IMMUTABLE, and all of its data must be copied before creating a new state.
 * Beware of the trap of references when dealing with objects.
 */

export function ADD_SITH (state, action) {
    action.data.uid = action.data.name.replace(/[^a-zA-Z0-9]+/, '');
    return {
        // this copies everything that was in the state, but to a new object
        // however, THIS IS A SHALLOW COPY, so anything that is not a primitive (bool, string, number) is copied by REFERENCE ONLY.
        ...state,
        // ...and this is why instead of pushing into sithLords we actually copy the contents of the current array with ...state.sithLords,
        // and add the new item via , action.data .
        // this, in effect, is an Array.push that actually duplicates the array.
        sithLords: [...state.sithLords, action.data] 
    };
}

export function REMOVE_SITH (state, action) {
    return { 
        ...state,
        sithLords: state.sithLords.filter(lord => action.data.uid !== lord.uid)
    };
}

export function UPDATE_SITH (state, action) {
    if (action.data.uid === '' || action.data.uid === null) {
        return ADD_SITH(state, action);
    } else {
        return { 
            ...state,
            sithLords: state.sithLords.map(lord => action.data.uid === lord.uid ? action.data : lord)
        };
    }
}

export function UPDATE_SKILL_FILTER (state, action) {
    return {
        ...state,
        cutoff: action.cutoff
    };
}

// Comment out the following if you don't want a default, catch-all action handler.
export function _CATCH_ALL (state, action) {
    console.log('HELLO BOYS, something went wrong', state, action);
    return { ...state };
}
