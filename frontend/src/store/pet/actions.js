import actionTypes from './actions.types';

export const addPetStart = petInfo => ({
    type: actionTypes.ADD_PET_REQUEST_START,
    payload: petInfo
});

export const addPetSuccess = petId => ({
    type: actionTypes.ADD_PET_REQUEST_SUCCESS,
    payload: petId
});

export const addPetFailure = error => ({
    type: actionTypes.ADD_PET_REQUEST_FAILURE,
    payload: error
});

