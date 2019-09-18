import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from 'history';

import api from '../../../services/api';
import signUpSuccess from './actions';

export function* signUp({ payload }) {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'registration', {
        name,
        email,
        password,
    });

    const { token, user } = response.data;

    yield put(signUpSuccess(token, user));

    history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
