export function signUpRequest(name, email, password) {
    return {
        type: '@user/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
}

export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: { data },
    };
}

export function updateProfileSuccess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: { profile },
    };
}

export function updateProfileFailure() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURE',
    };
}

export function sendInviteRequest(email) {
    return {
        type: '@user/SEND_INVITE_REQUEST',
        payload: { email },
    };
}

export function sendInviteSuccess() {
    return {
        type: '@user/SEND_INVITE_SUCCESS',
    };
}

export function sendInviteFailure() {
    return {
        type: '@user/SEND_INVITE_FAILURE',
    };
}

export function answerInviteRequest(isAccept, user_id) {
    return {
        type: '@user/ANSWER_INVITE_REQUEST',
        payload: { isAccept, user_id },
    };
}

export function answerInviteSuccess(profile) {
    return {
        type: '@user/ANSWER_INVITE_SUCCESS',
        payload: { profile },
    };
}

export function answerInviteFailure() {
    return {
        type: '@user/ANSWER_INVITE_FAILURE',
    };
}

export function startChatRequest(id) {
    return {
        type: '@user/START_CHAT_REQUEST',
        payload: { user_id: id },
    };
}

export function startChatSuccess(contact) {
    return {
        type: '@user/START_CHAT_SUCCESS',
        payload: { contact },
    };
}
