import produce from 'immer';

const INITIAL_STATE = { profile: null };

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@user/SIGN_UP_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@auth/SIGN_SUCCESS': {
                draft.token = action.payload.token;
                draft.profile = action.payload.user;
                draft.signed = true;
                draft.loading = false;
                break;
            }

            case '@auth/SIGN_FAILURE': {
                draft.loading = false;
                break;
            }

            case '@user/UPDATE_PROFILE_SUCCESS': {
                draft.profile = action.payload.profile;
                break;
            }

            case '@socket/NOTIFY_INVITE': {
                draft.profile = action.payload.profile;
                break;
            }

            case '@user/ANSWER_INVITE_SUCCESS': {
                draft.profile = action.payload.profile;
                break;
            }

            default:
        }
    });
}
