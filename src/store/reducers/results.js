import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type.toUpperCase()) {
        case actionTypes.STORE_RESULT: return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) })
        case actionTypes.DELETE_RESULT: return updateObject(state, { results: state.results.filter(result => result.id !== action.resultId) })
    }

    return { 
        results: state.results
    };
};

export default resultsReducer;
