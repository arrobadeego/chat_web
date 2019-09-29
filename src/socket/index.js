import React from 'react';
import io from 'socket.io-client';

import { notifyInvite } from '../store/modules/socket/actions';

// const Socket = dispatch => {
const socket = io('http://localhost:3333');

socket.on('connect', data => {
    console.log('Socket connected');
    console.log(data);

    socket.on('notifyInvite', s => {
        console.log(s);
    });

    // switch (data) {
    //     case 'notifyInvite': {
    //         // dispatch(notifyInvite);
    //         break;
    //     }

    //     default:
    // }
    // socket.on('teste', data => {
    //     setData(data.name);
    // });
});

//     return socket;
// };

// export default Socket;
