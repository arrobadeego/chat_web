export function signUpRequest(name, email, password) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
}

export function signUpSuccess(token, user) {
    return {
        type: '@auth/SIGN_UP_SUCCESS',
        payload: { token, user },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
