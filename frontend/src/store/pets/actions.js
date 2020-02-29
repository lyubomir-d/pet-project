import actionTypes from './actions.types';

export const getPetCollectionStart = () => ({
    type: actionTypes.GET_ALL_PETS_REQUEST_START,
});

export const getPetCollectionSuccess = (petCollection) => ({
    type: actionTypes.GET_ALL_PETS_REQUEST_SUCCESS,
    payload: petCollection
});

export const getPetCollectionFailure = error => ({
    type: actionTypes.GET_ALL_PETS_REQUEST_FAILURE,
    payload: error
});

