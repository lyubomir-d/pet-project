import actionTypes from './actions.types';

const INITIAL_STATE = {
    isLoading: false,
    successfulMessage: null,
    errorMessage: null,
    petCollection: null,
};

const petsReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case actionTypes.GET_ALL_PETS_REQUEST_START:
            return { ...state, isLoading: true };
        case actionTypes.GET_ALL_PETS_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                petCollection: payload
            };
        case actionTypes.GET_ALL_PETS_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload };

        case actionTypes.CLEAR_PET_COLLECTION_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default petsReducer;
