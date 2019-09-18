import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';

import api from '../../../services/api';

import { signUpSuccess, signFailure } from './actions';

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        const response = yield call(api.post, 'registration', {
            name,
            email,
            password,
        });

        const { token, user } = response.data;

        yield put(signUpSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Register failure, check your info');
        yield put(signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
