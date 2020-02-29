import { takeLatest, all, call, put } from 'redux-saga/effects';

// import petService from '../../fetch-api/services/pet.service';

import {
    addPetSuccess,
    addPetFailure
} from './actions';

import actionTypes from './actions.types';

// creating tour //

function* addPet(action) {
    const { payload } = action;
    try {
        // const data = yield fetch('/api/pets', {
        //     method: POST,
        //     body: JSON.stringify(payload)
        // })
        //yield put(createPetSuccess({petId: JSON.parse(data).pet_id}, petInfo: payload));
        yield put(addPetSuccess({petId: 1}, {petInfo: payload}));
    } catch (error) {
        console.error(error);
        yield put(addPetFailure(error.message));
    }
}

function* onAddPet() {
    yield takeLatest(actionTypes.CREATE_ADD_PET_REQUEST_START, addPet);
}


// all pat sagas watchers (e.g. 'onFetch...') should be put here
export function* sagas() {
    yield all([
        call(onAddPet),
    ]);
}
