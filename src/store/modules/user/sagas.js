import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';

import api from '../../../services/api';

import { signSuccess, signFailure } from '../auth/actions';

import {
    updateProfileSuccess,
    updateProfileFailure,
    sendInviteSuccess,
    sendInviteFailure,
    answerInviteSuccess,
    startChatSuccess,
} from './actions';

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        const response = yield call(api.post, 'registration', {
            name,
            email,
            password,
        });

        const { user } = response.data;

        const token = response.headers.authorization;

        localStorage.setItem('Authorization', token);

        yield put(signSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Register failure, check your info');
        yield put(signFailure());
    }
}

export function* updateProfile({ payload }) {
    try {
        const { name, email, avatar, ...rest } = payload.data;

        const profile = {
            name,
            email,
            avatar,
            ...(rest.oldPassword ? rest : {}),
        };

        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
            'Authorization'
        )}`;

        const response = yield call(api.put, 'users', profile);

        toast.success('Profile was successful updated');

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        toast.error('Error on update your profile, check your data');
        yield put(updateProfileFailure());
    }
}

export function* sendInvite({ payload }) {
    try {
        const { email } = payload;

        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
            'Authorization'
        )}`;

        const response = yield call(api.post, 'invites', email);

        toast.success('The invite was send');

        yield put(sendInviteSuccess());
    } catch (error) {
        const { email } = payload;
        toast.error(`Was impossible to send invite to ${email}.`);
        yield put(sendInviteFailure());
    }
}

export function* receiveInvite({ payload }) {
    try {
        const { isAccept, user_id } = payload;

        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
            'Authorization'
        )}`;

        const response = yield call(api.post, 'contacts', {
            isAccept,
            user_id,
        });

        yield put(answerInviteSuccess(response.data));
    } catch (error) {
        // toast.error(`Was impossible to send invite to ${email}.`);
        // yield put(sendInviteFailure());
    }
}

export function* startChat({ payload }) {
    try {
        const { user_id } = payload;
        console.tron.log(user_id);

        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
            'Authorization'
        )}`;

        const response = yield call(api.get, `contacts/${user_id}`);
        console.tron.log(response.data);
        yield put(startChatSuccess(response.data));
    } catch (error) {
        // toast.error(`Was impossible to send invite to ${email}.`);
        // yield put(sendInviteFailure());
        console.tron.log(error);
    }
}

export default all([
    takeLatest('@user/SIGN_UP_REQUEST', signUp),
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
    takeLatest('@user/SEND_INVITE_REQUEST', sendInvite),
    takeLatest('@user/ANSWER_INVITE_REQUEST', receiveInvite),
    takeLatest('@user/START_CHAT_REQUEST', startChat),
]);
