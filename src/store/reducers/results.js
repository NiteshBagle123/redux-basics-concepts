import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type.toUpperCase()) {
        case actionTypes.STORE_RESULT: return {
            ...state,
            results: state.results.concat({ id: new Date(), value: action.result })
        };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return {
            ...state,
            results: updatedArray
        }
    }

    return { 
        counter: action.result
    };
};

export default resultsReducer;