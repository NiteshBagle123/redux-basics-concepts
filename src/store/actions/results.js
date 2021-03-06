import * as actionTypes from './actionTypes';

export const saveResult = value => ({
    type: actionTypes.STORE_RESULT,
    ...value
});

export const storeResult = value => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(value));
        }, 2000);
    }
}

export const deleteResult = id => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: id
    }
}