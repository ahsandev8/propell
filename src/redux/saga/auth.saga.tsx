import {takeEvery, put} from 'redux-saga/effects';

import {loginAuth, logoutAuth, signupAuth} from '../slice/auth.slice';
import {PayloadAction} from '@reduxjs/toolkit';

function* loginSaga(action: PayloadAction<any>) {
  yield action.payload;
}

function* signupSaga(action: PayloadAction<any>) {
  yield action.payload;
}

function* logoutSaga(action: PayloadAction<any>) {
  yield action.payload;
}

export function* watchAuthSaga() {
  yield takeEvery(loginAuth, loginSaga);
  yield takeEvery(logoutAuth, logoutSaga);
  yield takeEvery(signupAuth, signupSaga);
}
