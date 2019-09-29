import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* notifyInvite({ payload }) {}

export default all([takeLatest('@socket/NOTIFY_INVITE', notifyInvite)]);
