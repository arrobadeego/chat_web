import io from 'socket.io-client';

import { notifyInvite } from '../store/modules/socket/actions';
import * as types from '../constants/ActionTypes';

const setupSocket = dispatch => {
    const socket = io('http://localhost:3333');

    socket.on('connect', event => {
        console.log('Socket connected');
        console.log(event);

        const data = JSON.parse(event.data);
        switch (data.type) {
            case types.NOTIFY_INVITE:
                dispatch(notifyInvite(data));
                break;
            default:
                break;
        }
    });

    return socket;
};

export default setupSocket;
