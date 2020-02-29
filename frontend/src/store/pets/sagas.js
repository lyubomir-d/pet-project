import { takeLatest, all, call, put } from 'redux-saga/effects';
import petsServices from "./petsService";

import {
    getPetCollectionSuccess,
    getPetCollectionFailure
} from './actions';

import actionTypes from './actions.types';

function* fetchPetCollection() {
    try {
        const data = yield petsServices.getPetCollection();
        yield put(getPetCollectionSuccess(JSON.parse(data)));
    } catch (error) {
        console.error(error);
        yield put(getPetCollectionFailure(error));
    }
}

function* onFetchPetCollection() {
    yield takeLatest(actionTypes.GET_ALL_PETS_REQUEST_START, fetchPetCollection);
}

export function* petsSagas() {
    yield all([
        call(onFetchPetCollection),
    ]);
}
