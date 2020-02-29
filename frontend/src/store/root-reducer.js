import { combineReducers } from 'redux';
import petReducer from './pet/reducer';
import petsReducer from './pets/reducer';

export default combineReducers({
    pet: petReducer,
    pets: petsReducer,
});
