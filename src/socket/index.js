import io from 'socket.io-client';

const socket = io('http://localhost:3333');

socket.on('connect', data => {
    console.log('Socket connected');

    // socket.on('teste', data => {
    //     setData(data.name);
    // });
});
