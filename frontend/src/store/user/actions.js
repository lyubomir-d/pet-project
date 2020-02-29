import actionTypes from './actions.types';

// Actions of creating user //

export const addPetStart = userInfo => ({
    type: actionTypes.CREATE_ADD_USER_REQUEST_START,
    payload: userInfo,
});

export const addPetSuccess = userId => ({
    type: actionTypes.CREATE_ADD_USER_REQUEST_SUCCESS,
    payload: userId,
});

export const addPetFailure = error => ({
    type: actionTypes.CREATE_ADD_USER_REQUEST_FAILURE,
    payload: error,
});

