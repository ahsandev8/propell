import {all} from 'redux-saga/effects';

import {watchAuthSaga} from '../saga/auth.saga';

export default function* rootSaga() {
  yield all([watchAuthSaga()]);
}
