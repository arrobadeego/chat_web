export function signUpRequest(name, email, password) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { name, email, password },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
