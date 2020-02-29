import { all, call } from 'redux-saga/effects';
import {petsSagas} from "./pets/sagas";
import {petSagas} from "./pet/sagas";

export default function* rootSaga() {
    yield all([
        call(petsSagas),
        call(petSagas),
    ]);
}
