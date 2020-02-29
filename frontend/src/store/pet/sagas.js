import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
    addPetSuccess,
    addPetFailure
} from './actions';

import actionTypes from './actions.types';

function* fetchAddPet(action) {
    const { payload } = action;
    try {
        const data = yield fetch(
            'https://polar-caverns-70793.herokuapp.com/api/pets',
            {
                method: POST,
                body: JSON.stringify(payload)
            }
        );
        yield put(addPetSuccess(
            {
                petId: JSON.parse(data).pet_id,
                petInfo: payload,
            })
        );
    } catch (error) {
        console.error(error);
        yield put(addPetFailure(error.message));
    }
}

function* onAddPet() {
    yield takeLatest(actionTypes.ADD_PET_REQUEST_START, fetchAddPet);
}

export function* petSagas() {
    yield all([
        call(onAddPet),
    ]);
}
