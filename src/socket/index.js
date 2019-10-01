import io from 'socket.io-client';

import { notifyInvite } from '../store/modules/socket/actions';
import * as types from '../constants/ActionTypes';

const setupSocket = dispatch => {
    const socket = io('http://localhost:3333');
    socket.on('connect', event => {
        console.log('Socket connected');

        socket.on('NOTIFY_INVITE', data => {
            dispatch(notifyInvite(data));
        });
    });
    return socket;
};

export default setupSocket;
