export function notifyInvite(data) {
    return {
        type: '@socket/NOTIFY_INVITE',
        payload: { data },
    };
}
