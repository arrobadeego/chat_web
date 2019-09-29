import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signSuccess, signFailure } from '../auth/actions';

export function* notifyInvite({ payload }) {
    yield put();
}

export default all([takeLatest('@socket/NOTIFY_INVITE', notifyInvite)]);
