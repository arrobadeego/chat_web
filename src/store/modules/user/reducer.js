import produce from 'immer';

const INITIAL_STATE = { loading: false };

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@user/SIGN_UP_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/SIGN_SUCCESS': {
                draft.token = action.payload.token;
                draft.signed = true;
                draft.loading = false;
                break;
            }

            case '@auth/SIGN_FAILURE': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}
