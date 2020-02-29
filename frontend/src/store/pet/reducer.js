import actionTypes from './actions.types';

const INITIAL_STATE = {
    isLoading: false,
    successfulMessage: null,
    errorMessage: null,
    petId: null,
    petInfo: null,
    petPhotos: null,
};

const petReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_PET_REQUEST_START:
            return { ...state, isLoading: true };
        case actionTypes.ADD_PET_REQUEST_SUCCESS:
            return { ...state, petInfo: action.payload.petInfo, isLoading: false, petId: action.payload.pet_id };
        case actionTypes.ADD_PET_REQUEST_FAILURE:
            return { ...state, isLoading: false, errorMessage: action.payload };

        case actionTypes.SET_PET_ID:
            return { ...state, petId: action.payload };
        case actionTypes.CLEAR_PET_DATA:
            return {
                ...state,
                petId: null,
                petInfo: null,
                petPhotos: null,
                petRoute: null
            };
        default:
            return state;
    }
};

export default petReducer;
