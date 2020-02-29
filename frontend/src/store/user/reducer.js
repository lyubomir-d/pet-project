import actionTypes from './actions.types';

const INITIAL_STATE = {
    isLoading: false,
    successfulMessage: null,
    errorMessage: null,
    userId: null,
    userInfo: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ADD_USER_REQUEST_START:
            return {
                ...state,
                isLoading: true
            };
        case actionTypes.CREATE_ADD_USER_REQUEST_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.userInfo,
                isLoading: false,
                userId: action.payload.user_id,
            };
        case actionTypes.CREATE_ADD_USER_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };

        case actionTypes.SET_USER_ID:
            return {
                ...state,
                userId: action.payload
            };
        case actionTypes.CLEAR_USER_DATA:
            return {
                ...state,
                userId: null,
                userInfo: null,
                userDetails: null,
                userRoute: null
            };
        default:
            return state;
    }
};

export default userReducer;
