import io from 'socket.io-client';
import { useDispatch } from 'react-redux';

const socket = io('http://localhost:3333');

socket.on('connect', data => {
    console.log('Socket connected');
    const dispatch = useDispatch();

    switch (data.type) {
        case 'notifyInvite': {
            
        }

        default:
    }
    // socket.on('teste', data => {
    //     setData(data.name);
    // });
});
