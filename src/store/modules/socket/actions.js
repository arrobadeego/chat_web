export function notifyInvite(profile) {
    return {
        type: '@socket/NOTIFY_INVITE',
        payload: { profile },
    };
}
