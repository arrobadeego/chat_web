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
