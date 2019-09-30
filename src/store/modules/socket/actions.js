export function notifyInvite(profile) {
    console.tron.log('Chamou a action');
    return {
        type: '@socket/NOTIFY_INVITE',
        payload: { profile },
    };
}
