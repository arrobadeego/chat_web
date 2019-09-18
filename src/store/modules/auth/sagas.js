import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';

import api from '../../../services/api';

import { signSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'login', {
            email,
            password,
        });

        const { user } = response.data;

        const token = response.headers.authorization;

        yield put(signSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Register failure, check your info');
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
